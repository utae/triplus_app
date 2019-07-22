import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, TextInput,TouchableOpacity} from "react-native";
import * as assets from 'Triplus_Components/assets/image'

export default class InquirePage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:'',
            emailInfo:'',
            contentInfo:'',
        }
    }

    _submit(){
        console.log('이름:'+this.state.userInfo +'\n이메일:'+this.state.emailInfo+'\n'+'내용:'+this.state.contentInfo)
    }

    render() {

        return (
            <View style={styles.container}>
                <Form
                    title={'이름입력'}
                    height={{height: 40}}
                    image={assets.checkedCircle}
                    onChangeText={(text)=>this.setState({userInfo:text})}/>
                <Form
                    title={'이메일 주소 입력'}
                    height={{height: 40}}
                    image={assets.checkedCircle}
                    onChangeText={(text)=>this.setState({emailInfo:text})}/>
                <Form
                    title={'내용입력'}
                    height={{height: 140}}
                    image={assets.checkedCircle}
                    onChangeText={(text)=>this.setState({contentInfo:text})}/>
                <TouchableOpacity style={styles.submitButton} onPress={this._submit.bind(this)}>
                    <Text style={styles.submitText}>{'등록하기'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const Form = (props) => (
    <View style={styles.Form}>
        <Text style={styles.FormTitle}>{props.title}</Text>
        <View style={styles.FormSubContainer}>
            <Image style={styles.checkImage} source={props.image}/><TextInput style={[styles.textInput, props.height]} onChangeText={props.onChangeText}/>
        </View>
    </View>
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 46

    },
    Form: {
        marginBottom: 16,
    },
    FormTitle: {
        marginLeft: 57,
        fontSize: 10,
        color: '#999999',
        marginBottom: 8
    },
    FormSubContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent:'center',
    },
    checkImage: {
        width: 18,
        height: 18,
        marginRight: 23,
        marginTop:15
    },
    textInput: {
        flex:1,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        fontSize: 13,
    },
    submitButton:{
        marginTop:4,
        backgroundColor:'#f20c49',
        width: 120,
        height:40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 57
    },
    submitText:{
        color: '#ffffff'
    }


})