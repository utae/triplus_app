import React,{Component} from 'react';
import {View} from "react-native";

export default class App extends Component<Props>{

    render(){
        return(
            <View style={{
                borderWidth: 1,
                backgroundColor: '#f7f7f7',
                height: 8,
                borderColor: '#f7f7f7',
                marginBottom: 43
            }}></View>
        )
    }
}

