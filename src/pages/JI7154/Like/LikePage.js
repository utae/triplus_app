import React,{Component} from 'react';
import {Image,Text,StyleSheet,View} from "react-native";



export default class App extends Component<Props>{
    constructor(props){
        super(props);
        this.state={
            datas : [
                {image:{},title:{}},
                {image:{},title:{}},
                {image:{},title:{}},
                {image:{},title:{}},
            ]
        }
    }

    render(){
        return(
            <View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft: 15,
        paddingRight:15,
    }
})