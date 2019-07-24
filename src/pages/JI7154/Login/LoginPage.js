import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, TextInput,TouchableOpacity} from "react-native";
import * as assets from 'Triplus_Components/assets/image'
import LinearGradient from "react-native-linear-gradient";

export default class LoginPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            idFocus: false,
            pwdFocus: false,
            autoLogin: false,
        }
    }

    render() {
        console.log(this.state.idFocus)
        return (
            <View style={styles.container}>
                <View style={[styles.inputView,]}>
                    <Image style={styles.inputImage} source={assets.loginIdImage}/>
                    <TextInput
                        style={styles.Input}
                        placeholder={'ID 입력'}
                        placeholderTextColor={'#cccccc'}
                        onFocus={() => this.setState({idFocus: true})}
                        onBlur={() => this.setState({idFocus: false})}/>
                </View>
                <LinearGradient
                    colors={this.state.idFocus?['#f20c49', '#780595']:['#cccccc','#cccccc']}
                    style={styles.linearGradient}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <View style={{height:1}}/>
                </LinearGradient>
            {/*    ID입력폼*/}
                <View style={[styles.inputView,]}>
                    <Image style={[styles.inputImage,{opacity:0.5}]} source={assets.loginPwdImage}/>
                    <TextInput
                        style={styles.Input}
                        placeholder={'비밀번호 입력'}
                        placeholderTextColor={'#cccccc'}
                        onFocus={() => this.setState({pwdFocus: true})}
                        onBlur={() => this.setState({pwdFocus: false})}/>
                </View>
                <LinearGradient
                    colors={this.state.pwdFocus?['#f20c49', '#780595']:['#cccccc','#cccccc']}
                    style={styles.linearGradient}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <View style={{height:1}}/>
                </LinearGradient>
            {/*    PWD입력폼*/}
                <TouchableOpacity
                    style={styles.autoLoginView}
                    onPress={()=>this.setState({autoLogin:!this.state.autoLogin})}>
                    <View style={[styles.autoLoginCheckBox,this.state.autoLogin?{backgroundColor: '#f20c49',borderWidth: 0}:{}]}/>
                    <Text style={styles.autoLoginText}>{'자동 로그인'}</Text>
                </TouchableOpacity>
                <LinearGradient
                    colors={['#f20c49', '#780595']}
                    style={[styles.LoginButton]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <TouchableOpacity style={{justifyContent: 'center',
                        alignItems: 'center',}}>
                        <Text style={styles.LoginText}>{'로그인'}</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.findView}>
                    <TouchableOpacity>
                        <Text style={styles.findViewText}>{'아이디 찾기'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.findViewText}>{'|'}</Text>
                    <TouchableOpacity>
                        <Text style={styles.findViewText}>{'비밀번호 찾기'}</Text>
                    </TouchableOpacity>
                    <Text style={styles.findViewText}>{'|'}</Text>
                    <TouchableOpacity>
                        <Text style={styles.findViewText}>{'회원가입'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
    },
    linearGradient: {
        width:'100%'
    },
    inputView: {
        flexDirection: 'row',
        height: 70,
        paddingLeft: 15,
        alignItems: 'center',

    },
    inputImage: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        backgroundColor:'#ffffff'
    },
    Input: {
        paddingLeft: 23,
        justifyContent: 'center',
        color:'#333333'
    },
    InputPlaceHolder: {
        fontSize:13,
        color:'#cccccc'
    },
    autoLoginView: {
        paddingTop: 10,
        flexDirection: 'row',
        marginBottom:27
    },
    autoLoginCheckBox: {
        width:13,
        height:13,
        borderRadius:13,
        borderWidth:1,
        borderColor:'#cccccc',
        marginRight:4
    },
    autoLoginText: {
        fontSize: 10,
        color:'#666666'
    },
    LoginButton: {
        width:'100%',
        height:45,
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    LoginText: {
        fontSize:13,
        color:'#ffffff'
    },
    findView:{
        paddingLeft:58,
        paddingRight: 58,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    findViewText: {
        fontSize:11,
        color:'#666666'
    },
})