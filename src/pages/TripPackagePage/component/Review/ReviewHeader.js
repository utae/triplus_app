import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity, ScrollView} from "react-native";
import * as assets from "../../../assets";

export default class App extends Component<Props> {
    _renderPhotoReview() {
        return (
            assets.photos.map(function (photos, index) {
                    return (
                        <View style={styles.photoReviewImage} key={index}>
                            <Image source={photos} style={styles.photos}/>
                        </View>)
                }
            )
        )
    }


    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.reviewCount}>리뷰 {this.props.reviewCount}</Text>
                        <View style={styles.starScore}>
                            <Image source={assets.startImage["4점"]} style={{width:73,resizeMode: 'contain'}}/>
                            <Text style={styles.scoreText}>4.0 </Text>
                            <Text style={styles.totalScoreText}>| 5.0</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.writeReviewButton}>
                        <Image source={assets.writeReviewIcon}/>
                        <Text style={styles.writeReviewText}>리뷰쓰기</Text>
                    </TouchableOpacity>
                </View>
                {/*포토리뷰*/}
                <View style={styles.photoReviewContainer}>
                    <ScrollView
                        horizontal={true}
                        style={{marginBottom: 8}}>
                        {this._renderPhotoReview()}
                    </ScrollView>
                    <TouchableOpacity style={{marginBottom: 18}}>
                        <Text>포토리뷰 모아보기 ></Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 22
    },
    reviewCount: {
        fontSize: 18, color: '#000000', marginBottom: 8,fontWeight: 'bold'
    },
    starScore: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    scoreText: {
        fontSize: 12, color: '#000000', marginLeft: 9
    },
    totalScoreText: {
        fontSize: 12, color: '#999999'
    },
    writeReviewButton: {
        borderColor: '#dedede',
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width:90,
        height: 30
    },
    writeReviewText: {
        fontSize: 13, color: '#666666'
    },
    photoReviewContainer:{
        borderBottomWidth: 1, borderBottomColor: '#dedede', marginBottom: 20
    },
    photoReviewImage: {
        width: 70, height: 70, marginRight: 10
    },
    photos:{
        width: '100%', height: '100%', borderRadius: 10
    }
})