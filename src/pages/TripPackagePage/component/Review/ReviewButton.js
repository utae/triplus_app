import React,{Component} from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity} from "react-native";
import * as assets from "../../../assets";


export default class App extends Component<Props>{

    render(){
        return(
            <TouchableOpacity style={styles.moreReviewButton}>
                <Text style={styles.buttonText}>리뷰더보기</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    moreReviewButton: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#dedede',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 45,
    },
    buttonText:{
        fontSize: 13, color: '#666666'
    }
})