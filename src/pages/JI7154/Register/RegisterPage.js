import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView} from "react-native";
import update from "react-addons-update";
import * as assets from 'Triplus_Components/assets/image'

type Props={

}

type State={
    forms:Object,
    termsAgree:Object
}

export default class RegisterPage extends Component<Props,State> {
    constructor(props) {
        super(props);
        this.state = {
            forms: [
                {title: '이메일 주소*', index: 1, placeholder: '이메일 주소를 입력해주세요', onFocus: false},
                {title: '이름*', index: 2, placeholder: '이름을 입력해주세요.', onFocus: false, validation: ''},
                {title: '비밀번호*', index: 3, placeholder: '비밀번호를 입력해주세요.', onFocus: false, validation: ''},
                {title: '비밀번호 재입력*', index: 4, placeholder: '비밀번호를 다시 입력해주세요.', onFocus: false, validation: ''}
            ],
            termsAgree: [false, false, false],
        }
    }

    //Focus된 Form handling
    handleFocus(key) {
        const value = !this.state.forms[key].onFocus
        this.setState({
            onFocus: update(
                this.state.forms, {
                    [key]: {
                        onFocus: {$set: value}

                    }
                }
            ),
        })
    }

    //Focus가 사라질 때 handling
    handleBlur(key) {
        const value = !this.state.forms[key].onFocus
        this.setState({
            onFocus: update(
                this.state.onFocus, {
                    [key]: {
                        onFocus: {$set: value}
                    }
                }
            ),
        })
    }

    //약관 동의 handling
    agreeOnPressEvent(key) {
        //모두 동의를 눌렀을때
        if (key == -1) {
            const bool = this.state.termsAgree[0] && this.state.termsAgree[1] && this.state.termsAgree[2]
            if (!bool) {
                this.setState({
                    termsAgree: [true, true, true]
                })
            } else {
                this.setState({
                    termsAgree: [false, false, false]
                })
            }
        }
        //그외에 하나씩 누를 때
        else {
            const value = !this.state.termsAgree[key]
            this.setState({
                termsAgree: update(
                    this.state.termsAgree, {
                        [key]: {
                            $set: value
                        }
                    }
                ),
            })
        }

    }

    membershipAndTermsOfService() {
        alert('회원가입 및 운영약관')
    }

    privacyTermsAndConditions() {
        alert('개인정보 수집 및 이용')
    }

    register() {
        //필수사항을 모두 동의 했을 때
        if (this.state.termsAgree[0] && this.state.termsAgree[1]) {
            alert('가입완료')
        } else {
            alert('약관에 동의하여 주십시오')
        }

    }


    //가입 정보 랜더링
    renderForm() {
        return (
            this.state.forms.map(function (form, key) {
                    return (
                        <View style={styles.form} key={key}>
                            <Text style={styles.formTitle}>{form.title}</Text>
                            <View style={{flexDirection: 'row', height: 40, alignItems: 'center'}}>
                                <View style={styles.formNum}>
                                    <Text style={styles.indexText}>{form.index}</Text>
                                </View>
                                <TextInput
                                    style={[styles.textInput, form.onFocus ? {borderColor: '#f20c49'} : {borderColor: '#e1e1e1'}]}
                                    placeholder={form.placeholder}
                                    onFocus={() => this.handleFocus(form.index - 1).bind(this)}
                                    onBlur={() => this.handleBlur(form.index - 1).bind(this)}
                                    editable={false}
                                />
                            </View>
                        </View>
                    )
                }
            )
        )
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={{
                    paddingLeft: 15,
                    paddingRight: 15,
                }}>
                {/*가입 정보 시작*/}
                <View style={styles.registerInfo}>
                    <Text style={{fontSize: 12, color: '#555555'}}>{'가입 정보 입력'}</Text>
                </View>
                {this.renderForm()}
                {/*가입정보끝*/}
                <Divider/>

                {/*약관 동의 시작*/}
                <View style={styles.terms}>
                    <Text style={{fontSize: 12, color: '#555555'}}>{'약관 동의'}</Text>
                </View>
                {/*모두 동의 시작*/}
                <TouchableOpacity style={styles.allAgree} onPress={() => this.agreeOnPressEvent(-1)}>
                    <Image
                        source={this.state.termsAgree[0] && this.state.termsAgree[1] && this.state.termsAgree[2] ? assets.checkedIcon : assets.unCheckedIcon}
                        style={styles.checkBox}/>
                    <Text style={{fontSize: 11, color: '#555555'}}>{'아래 약관에 모두 동의합니다.'}</Text>
                </TouchableOpacity>
                {/*모두 동의 끝*/}

                {/*회원가입 및 운영약관 시작*/}
                <View style={styles.agreeView}>
                    <TouchableOpacity onPress={() => this.agreeOnPressEvent(0)}>
                        <Image
                            source={this.state.termsAgree[0] ? assets.checkedIcon : assets.unCheckedIcon}
                            style={styles.checkBox}/>
                    </TouchableOpacity>
                    <Text style={styles.underLineText} onPress={() => {
                        this.membershipAndTermsOfService()
                    }}>{'회원가입 및 운영약관'}</Text>
                    <Text style={styles.planText}>{' 동의 (필수)'}</Text>
                </View>
                {/*회원가입 및 운영약관 끝*/}
                {/*개인정보 수집 동의 시작*/}
                <View style={styles.agreeView}>
                    <TouchableOpacity onPress={() => this.agreeOnPressEvent(1)}>
                        <Image
                            source={this.state.termsAgree[1] ? assets.checkedIcon : assets.unCheckedIcon}
                            style={styles.checkBox}/>
                    </TouchableOpacity>
                    <Text style={styles.underLineText}
                          onPress={() => this.privacyTermsAndConditions()}>{'개인정보 수집 및 이용'}</Text>
                    <Text style={styles.planText}>{' 동의 (필수)'}</Text>
                </View>
                {/*개인정보 수집 끝*/}
                {/*마케팅 동의 시작*/}
                <TouchableOpacity style={styles.agreeView} onPress={() => this.agreeOnPressEvent(2)}>
                    <Image
                        source={this.state.termsAgree[2] ? assets.checkedIcon : assets.unCheckedIcon}
                        style={styles.checkBox}/>
                    <Text style={styles.planText}>{'추천 상품, 이벤트 및 마케팅 정보 수신 동의 (선택)'}</Text>
                </TouchableOpacity>
                {/*    마케팅 동의 끝*/}
                <TouchableOpacity style={styles.registerButton} onPress={() => this.register()}>
                    <Text style={styles.registerText}>{'가입하기'}</Text>
                </TouchableOpacity>
            </ScrollView>

        )
    }
}

const Divider = () => (
    <View style={{
        borderTopWidth: 0.5,
        borderTopColor: '#bfbfbf',
        backgroundColor: '#f7f7f7',
        height: 8,
        marginLeft: -15,
        marginRight: -15,
        marginTop: 14,
    }}></View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    registerInfo: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        marginBottom: 21,
    },
    form: {
        marginBottom: 15,
    },
    formTitle: {
        marginLeft: 42,
        fontSize: 10,
        color: '#999999',
        marginBottom: 7,
    },
    formNum: {
        width: 18,
        height: 18,
        borderRadius: 9,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 23,
        shadowColor: '#33000000',
        backgroundColor: '#ffffff'
    },
    indexText: {
        fontSize: 9,
        color: '#999999',
    },
    textInput: {
        flex: 1,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        alignItems: 'center',
        fontSize: 10,
        paddingLeft: 10
    },
    terms: {
        height: 50,
        paddingLeft: 15,
        justifyContent: 'center',
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1
    },
    allAgree: {
        flexDirection: 'row',
        marginTop: 20,
        paddingLeft: 15,
        marginBottom: 15,
    },
    agreeView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        paddingLeft: 15,
    },
    checkBox: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginRight: 10,
    },
    underLineText: {
        fontSize: 11,
        color: '#777777',
        textDecorationLine: 'underline'
    },
    planText: {
        fontSize: 11,
        color: '#777777'
    },
    registerButton: {
        flex: 1,
        height: 50,
        backgroundColor: '#f20c49',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 34,
        marginBottom: 50,
    },
    registerText: {
        color: '#ffffff',
        fontSize: 13
    }

})