import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity, ImageBackground, Dimensions, ScrollView} from "react-native";
import * as assets from 'Triplus_Components/assets/image'

const {width, height} = Dimensions.get('window')
const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

export default class IntroLoginPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ScrollView>
                <ImageBackground
                    source={assets.reviewThumbnailList[2]}
                    style={styles.container}>
                    <Image style={styles.logo} source={assets.logoImage}/>

                    {/*SNS로그인 부분 시작*/}
                    <TouchableOpacity style={[styles.loginSnsButton, {backgroundColor: '#fae100'}]}>
                        <Image style={styles.snsIcon} source={assets.kakaoTalkIcon}/>
                        <Text style={[styles.loginSnsText, {color: '#381e1f'}]}>{'카카오톡 로그인'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.loginSnsButton, {backgroundColor: '#1877f2'}]}>
                        <Image style={styles.snsIcon} source={assets.facebookIcon}/>
                        <Text style={[styles.loginSnsText, {color: '#ffffff'}]}>{'페이스북 로그인'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.loginSnsButton, {backgroundColor: '#03d96a'}]}>
                        <Image style={styles.snsIcon} source={assets.wechatIcon}/>
                        <Text style={[styles.loginSnsText, {color: '#ffffff'}]}>{'위쳇 로그인'}</Text>
                    </TouchableOpacity>
                    {/*SNS로그인 부분 끝*/}
                    {/*OR디바이더 뷰 시작*/}
                    <View style={styles.dividerView}>
                        <View style={{width: 50, height: 1, backgroundColor: '#e1e1e1'}}/>
                        <Text style={{fontSize: 13, color: '#cccccc'}}>{'or'}</Text>
                        <View style={{width: 50, height: 1, backgroundColor: '#e1e1e1'}}/>
                    </View>
                    {/*OR디바이더 뷰 끝*/}
                    {/*로그인 회원가입 버튼 시작*/}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 34}}>
                        <TouchableOpacity style={[styles.LoginRegisterButton, {marginRight: 15}]}>
                            <Text style={{fontSize:11,color:'#333333'}}>{'로그인'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.LoginRegisterButton}>
                            <Text style={{fontSize:11,color:'#333333'}}>{'회원가입'}</Text>
                        </TouchableOpacity>
                    </View>
                    {/*로그인 회원가입 버튼 끝*/}

                    {/*찾기 부분 시작*/}
                    <View style={{flexDirection: 'row',marginBottom:70}}>
                        <TouchableOpacity style={{marginRight:14}}>
                            <Text style={styles.findText}>{'아이디 찾기'}</Text>
                        </TouchableOpacity>
                        <View style={{width: 1, height: '100%', backgroundColor: '#ffffff',marginRight:14}}/>
                        <TouchableOpacity>
                            <Text style={styles.findText}>{'비밀번호 찾기'}</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 137,
        backgroundColor: '#4c000000',
        alignItems: 'center',
    },
    logo: {
        alignItems: 'center',
        width: 80,
        resizeMode: 'contain',
        marginBottom: 150
    },
    loginSnsButton: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        paddingLeft: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    snsIcon: {
        width: 20,
        resizeMode: 'contain',
        position: 'absolute',
        left: 20
    },
    loginSnsText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 11
    },
    dividerView: {
        marginTop: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 25,
    },
    LoginRegisterButton: {
        width: (screenWidth - 45) / 2,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b3ffffff',
        borderRadius: 5,
    },
    findText: {
        fontSize: 11,
        color: '#ffffff'
    },
})