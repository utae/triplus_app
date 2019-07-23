import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View, Picker} from "react-native";
import {placeholder} from "@babel/types";
import update from "react-addons-update";


export default class PaymentPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            forms: [
                {mode: 0, index: 1, title: '호칭', placeholder: '호칭을 입력하세요', onFocus:false},
                {mode: 0, index: 2, title: '여권 영문 성', placeholder: 'Last name 을 입력하세요.', onFocus:false},
                {mode: 0, index: 3, title: '여권 영문 이름', placeholder: 'First name 을 입력하세요.', onFocus:false},
                {mode: 1, index: 4, title: '여권상 국가', placeholder: '선택하세요.', value: {}},
                {mode: 1, index: 5, title: '국가 코드', placeholder: '선택하세요.', value: {}},
                {mode: 0, index: 6, title: '핸드폰번호(긴급상황 대비)', placeholder: '휴대폰 번호를 입력하세요.',onFocus:false},
                {mode: 0, index: 7, title: '이메일 주소 (바우처 수령)', placeholder: '바우처 수령 가능한 이메일 주소를 입력하세요.',onFocus:false},

            ]
        }
    }

    _formattingPrice(num) {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    }

    handleFocus(key) {
        const value = !this.state.forms[key].onFocus
        this.setState({
            onFocus: update(
                this.state.forms, {
                    [key]: {
                        onFocus:{$set: value}

                    }
                }
            ),
        })
    }

    handleBlur(key) {
        const value = !this.state.forms[key].onFocus
        this.setState({
            onFocus: update(
                this.state.onFocus, {
                    [key]: {
                        onFocus:{$set: value}
                    }
                }
            ),
        })
    }

    renderForm() {
        return (
            this.state.forms.map(function (form, key) {
                    if (form.mode == 0) {
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
                                        onFocus={()=>this.handleFocus(form.index - 1)}
                                        onBlur={()=>this.handleBlur(form.index - 1)}
                                        editable={false}
                                    />
                                </View>
                            </View>
                        )
                    } else {
                        return (
                            <View style={styles.form} key={key}>
                                <Text style={styles.formTitle}>{form.title}</Text>
                                <View style={{flexDirection: 'row', height: 40, alignItems: 'center'}}>
                                    <View style={styles.formNum}>
                                        <Text style={styles.indexText}>{form.index}</Text>
                                    </View>
                                    <View style={styles.dropdownInput}>
                                        <Picker textStyle={{fontSize: 10, color: '#cccccc'}}>
                                            <Picker.Item style={{fontSize: 5}} label='선택하세요.' value='placeholder'/>
                                            <Picker.Item label='korea' value='한국'/>
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                }
            )
        )
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.listItem}>
                    <Image style={styles.thumbnailImage}
                           source={this.props.image}
                    />
                    <View style={styles.subContainer}>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                        <Text style={styles.date}>{'날짜 선택 : ' + this.props.date}</Text>
                        {this.props.option.map(function (options, index) {
                            return <Text style={styles.options} key={index}>{'옵션 선택 : ' + options}</Text>
                        })
                        }
                        <View style={{backgroundColor: '#e1e1e1', height: 1, marginTop: 19, marginBottom: 10}}/>
                        <Text style={styles.price}>{'￦' + this._formattingPrice(this.props.price)}</Text>
                    </View>
                </View>
                <Divider/>
                <Text style={styles.subTitle}>예약 정보</Text>
                <View style={styles.rsvInfoContainer}>

                    <View style={{height: 1, backgroundColor: '#e1e1e1', marginBottom: 20}}/>
                    {this.renderForm()}
                </View>
                <Divider/>
                <Text style={styles.payInfoView}>{'결재 정보'}</Text>
                <View style={{marginLeft: 15,marginRight: 15,height:1,backgroundColor:'#e1e1e1'}}/>
                <View style={styles.totalPriceInfo}>
                    <Text style={styles.totalPriceText}>{'총 금액'}</Text>
                    <Text style={styles.totalPriceForPay}>{ this._formattingPrice(this.props.price)+' ￦'}</Text>
                </View>
            </ScrollView>

        )
    }
}

const Divider = ()=>(
    <View style={{
        backgroundColor: '#f7f7f7',
        height: 8,
        marginTop: 15,
    }}></View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listItem: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 12
    },
    subContainer: {
        flex: 1,
        paddingLeft: 10,
    },
    thumbnailImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        resizeMode: 'cover',
        overflow: 'hidden'
    },
    title: {
        color: '#333333',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    date: {
        marginBottom: 10,
        color: '#777777',
        fontSize: 12
    },
    options: {
        color: '#777777',
        fontSize: 12
    },
    price: {
        color: '#f20c49',
        fontSize: 12,
    },
    subTitle: {
        width: '100%',
        height: 50,
        paddingLeft: 30,
        paddingTop: 19,
        paddingBottom: 19,
        fontSize: 12,
        lineHeight: 12,
        color: '#555555'
    },
    rsvInfoContainer: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    form: {
        marginBottom: 16,
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
    },
    dropdownInput: {
        flex: 1,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        justifyContent: 'center',
        fontSize: 10,
    },
    payInfoView:{
        alignItems:'center',
        paddingLeft:30,
        paddingTop:19,
        paddingBottom: 19,
        height:50,
        flex:1,
        color:'#555555',
        fontSize:12,
        lineHeight: 12,
    },
    totalPriceInfo:{
        flexDirection:'row',
        height:50,
        paddingLeft:30,
        paddingRight:30,
        alignItems:'center',
        justifyContent:'space-between'
    },
    totalPriceText:{
        fontSize:12,
        color:'#555555'
    },
    totalPriceForPay:{
        fontSize:12,
        color:'#f20c49'
    }
})