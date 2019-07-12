import React,{Component} from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity} from "react-native";


export default class App extends Component<Props>{

    constructor(props){
        super(props)

    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image}/>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.content}>{this.props.content}</Text>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>로그인</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    image :{
        marginTop:155,
        width:100,
        height:100,
        resizeMode: 'contain',
        opacity:0.4

    },
    title:{
        marginTop: 27,
        fontSize:16,
        color:'#333333'
    },
    content:{
        marginTop:14,
        fontSize: 12,
        color: '#777777'
    },
    loginButton: {
        marginTop:47,
        width:100,
        height: 35,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f20c49',
        borderRadius:8
    },
    loginText:{
        fontSize:14,
        color:'#ffffff'
    }
})