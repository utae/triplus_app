import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, Dimensions} from "react-native";
const {width, height} = Dimensions.get('window')
const screenWidth = width < height ? width : height

export default class App extends Component<Props> {
    _renderRecommendImages() {
        return <View>
            <Text style={{width: screenWidth / 2, height: 190, marginBottom: 10, alignItems: 'center'}}>추천상품 이미지</Text>
            <Text style={{width: screenWidth / 2}}>22만원 부터</Text>
        </View>
    }

    render() {
        return (
            <View>
                <Text style={styles.title}>이 여행과 관련된 추천상품</Text>
                <ScrollView
                    horizontal={true}
                    style={{marginBottom: 20}}>
                    {this._renderRecommendImages()}
                </ScrollView>
                <View style={styles.reserveVIew}>
                    <View style={styles.priceView}>
                        <Text style={styles.TRIPLUSText}>TRIPLUS 할인가</Text>
                        <Text style={styles.priceText}>₩ 75,000</Text>
                    </View>
                    <TouchableOpacity style={styles.reserveButton}>
                        <Text style={styles.reserveButtonText}>예약하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16, marginBottom: 20
    },
    reserveVIew: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        height: 80
    },
    priceView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        marginRight: 10
    },
    TRIPLUSText:{
        fontSize: 10, color: '#999999'
    },
    priceText:{
        fontSize: 16, color: '#5963bc'
    },
    reserveButton:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f20c49',
        height: 45,
        borderRadius: 8
    },
    reserveButtonText:{
        fontSize: 16, color: '#ffffff'
    }
})