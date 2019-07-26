import React, {Component} from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Modal,
    TouchableOpacity,
    Picker,
    Dimensions
} from "react-native";
import update from "react-addons-update";
import {Select, Option} from "react-native-chooser";
import * as assets from 'Triplus_Components/assets/image'

const {width, height} = Dimensions.get('window')
const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width


export default class PaymentPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            forms: [
                {mode: 0, index: 1, title: '호칭', placeholder: '호칭을 입력하세요', onFocus: false},
                {mode: 0, index: 2, title: '여권 영문 성', placeholder: 'Last name 을 입력하세요.', onFocus: false},
                {mode: 0, index: 3, title: '여권 영문 이름', placeholder: 'First name 을 입력하세요.', onFocus: false},
                {mode: 1, index: 4, title: '여권상 국가', value: ['한국', '미국', '영국'], selectValue: '선택하세요'},
                {mode: 1, index: 5, title: '국가 코드', value: ['001', '002', '003'], selectValue: '선택하세요'},
                {mode: 0, index: 6, title: '핸드폰번호(긴급상황 대비)', placeholder: '휴대폰 번호를 입력하세요.', onFocus: false},
                {mode: 0, index: 7, title: '이메일 주소 (바우처 수령)', placeholder: '바우처 수령 가능한 이메일 주소를 입력하세요.', onFocus: false},
            ],
            payMethod:{checkedIndex:-1,value:['네이버페이,카카오페이,신용카드']},
            agreeTerms:false,

        }
    }

    _formattingPrice(num) {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    }

    _handleFocus(key) {
        const value = !this.state.forms[key].onFocus
        this.setState({
            forms: update(
                this.state.forms, {
                    [key]: {
                        onFocus: {$set: value}

                    }
                }
            ),
        })
    }

    _handleBlur(key) {
        const value = !this.state.forms[key].onFocus
        this.setState({
            forms: update(
                this.state.forms, {
                    [key]: {
                        onFocus: {$set: value}
                    }
                }
            ),
        })
    }

    dropdownSelectValue(key, value) {
        this.setState({
            forms: update(
                this.state.forms, {
                    [key]: {
                        selectValue: {$set: value}
                    }
                }
            ),
        })
    }

    selectPayMethod(key){
        this.setState({
            payMethod: update(
                this.state.payMethod, {
                    checkedIndex: {
                        $set: key
                    }
                }
            ),
        })
        console.log(this.state.payMethod)

    }

    agreeTerms(){
        this.setState({
            agreeTerms:!this.state.agreeTerms
        })
    }

    pay(){
        if(this.state.agreeTerms){
            alert('결제완료')
        }
        else{
            alert('이용약관에 동의하여 주십시오.')
        }
    }

    _terms(){
        alert('이용약관')
    }
    _privacy(){
        alert('개인정보 처리방침')
    }


    renderForm() {
        return (
            this.state.forms.map((form, key) => {
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
                                        onFocus={() => this._handleFocus(form.index - 1)}
                                        onBlur={() => this._handleBlur(form.index - 1)}
                                        editable={true}
                                    />
                                </View>
                            </View>
                        )
                    } else {
                        return (
                            <View style={styles.form} key={key}>
                                <Text style={styles.formTitle}>{form.title}</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={styles.formNum}>
                                        <Text style={styles.indexText}>{form.index}</Text>
                                    </View>
                                    <Select
                                        onSelect={(value) => this.dropdownSelectValue(form.index - 1, value)}
                                        defaultText={form.selectValue}
                                        style={styles.dropdownInput}
                                        textStyle={{fontSize: 10, color: '#cccccc'}}
                                        backdropStyle={{opacity: 0.4}}
                                        optionListStyle={{borderWidth: 0}}
                                    >
                                        {
                                            form.value.map((value, index) => {
                                                return (
                                                    <Option style={{borderBottomColor: '#e1e1e1', borderBottomWidth: 1}}
                                                            key={index} value={value}>{value}</Option>
                                                )
                                            })
                                        }
                                    </Select>
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
            <ScrollView  style={styles.container}>
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
                <View style={{marginLeft: 15, marginRight: 15, height: 1, backgroundColor: '#e1e1e1'}}/>
                <View style={styles.totalPriceInfo}>
                    <Text style={styles.totalPriceText}>{'총 금액'}</Text>
                    <Text style={styles.totalPriceForPay}>{this._formattingPrice(this.props.price) + ' ￦'}</Text>
                </View>
                <Divider/>
                <View style={{paddingLeft:15,paddingRight:15,}}>
                    <View style={styles.payMethodTitleView}>
                        <Text style={styles.payMethodTitle}>{'결제 선택'}</Text>
                    </View>

                    {/*결제방법 선택 시작*/}
                    <TouchableOpacity
                        style={{flexDirection: 'row', paddingLeft: 15, height: 50, alignItems: 'center'}}
                        onPress={()=>this.selectPayMethod(0)}>
                        <Image style={styles.checkBox} source={this.state.payMethod.checkedIndex==0?assets.checkedCircleIcon:assets.uncheckedCircle}/>
                        <Image style={styles.payMethodImage} source={assets.naverPay}/>
                        <Text style={styles.payMethodText}>{'네이버 페이'}</Text>
                    </TouchableOpacity>
                    <View style={{height:1,backgroundColor:'#e1e1e1'}}/>
                    <TouchableOpacity
                        style={{flexDirection: 'row', paddingLeft: 15, height: 50, alignItems: 'center'}}
                        onPress={()=>this.selectPayMethod(1)}>
                        <Image style={styles.checkBox} source={this.state.payMethod.checkedIndex==1?assets.checkedCircleIcon:assets.uncheckedCircle}/>
                        <Image style={styles.payMethodImage} source={assets.kakaoPay}/>
                        <Text style={styles.payMethodText}>{'카카오 페이'}</Text>
                    </TouchableOpacity>
                    <View style={{height:1,backgroundColor:'#e1e1e1'}}/>
                    <TouchableOpacity
                        style={{flexDirection: 'row', paddingLeft: 15, height: 50, alignItems: 'center'}}
                        onPress={()=>this.selectPayMethod(2)}>
                        <Image style={styles.checkBox} source={this.state.payMethod.checkedIndex==2?assets.checkedCircleIcon:assets.uncheckedCircle}/>
                        <Text style={styles.payMethodText}>{'신용카드'}</Text>
                    </TouchableOpacity>
                </View>
                <Divider/>
                <View style={{paddingTop:30,paddingLeft:15,paddingRight:15}}>
                    <TouchableOpacity
                        style={{flexDirection:'row',marginBottom:30,flexGrow:1}}
                        onPress={()=>this.agreeTerms()}>
                        <Image  style={{width:16,height:16,resizeMode:'contain',marginRight:10,}} source={this.state.agreeTerms?assets.checkedIcon:assets.unCheckedIcon}/>
                        <Text style={{flex:1}}>
                            <Text style={styles.agreePlainText}>결제 진행시, </Text>
                            <Text style={styles.emphasizeText}
                                  onPress={()=>this._terms()}>이용약관</Text>
                            <Text style={styles.agreePlainText}> 및 </Text>
                            <Text style={styles.emphasizeText}
                                  onPress={()=>this._privacy()}>개인정보 처리방침</Text>
                            <Text style={styles.agreePlainText}>을 모두 읽고, 이에 동의하는 것으로 간주합니다.</Text>
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{flex:1,height:45,borderRadius:10,backgroundColor:'#f20c49',marginBottom:121,alignItems:'center',justifyContent:'center'}}
                        onPress={()=>this.pay()}>
                        <Text style={{fontSize:14,color:'#ffffff'}}>{'결제하기'}</Text>
                    </TouchableOpacity>
                </View>

            {/*    결제방법 선택 끝*/}
            </ScrollView>

        )
    }
}

const Divider = () => (
    <View style={{
        borderTopColor:'#bfbfbf',
        borderTopWidth:0.5,
        backgroundColor: '#f7f7f7',
        height: 8,
    }}></View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginBottom:25,
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
        justifyContent: 'center',
        fontSize: 10,
        paddingLeft: 10,
    },
    dropdownInput: {
        width: screenWidth - 15 * 2 - 18 - 23,
        justifyContent: 'center',
        paddingLeft: 10,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e1e1e1',
    },
    payInfoView: {
        alignItems: 'center',
        paddingLeft: 30,
        paddingTop: 19,
        paddingBottom: 19,
        height: 50,
        flex: 1,
        color: '#555555',
        fontSize: 12,
        lineHeight: 12,
    },
    totalPriceInfo: {
        flexDirection: 'row',
        height: 50,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    totalPriceText: {
        fontSize: 12,
        color: '#555555'
    },
    totalPriceForPay: {
        fontSize: 12,
        color: '#f20c49'
    },
    payMethodTitle: {
        fontSize:12,
        color:'#555555',
        paddingLeft: 15,
    },
    payMethodTitleView:{
        height:50,
        justifyContent:'center',
        borderBottomColor: '#e1e1e1',
        borderBottomWidth: 1,
    },
    checkBox: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginRight:15,
    },
    payMethodImage: {
        resizeMode:'contain',
        marginRight:10,
    },
    payMethodText:{
        fontSize:12,
        color :'#000000'
    },
    agreePlainText:{
        fontSize:12,
        color:'#777777'
    },
    emphasizeText:{
      fontSize:12,
      color:'#f20c49'
    }

})