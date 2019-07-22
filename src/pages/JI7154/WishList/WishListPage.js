import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, ImageBackground, Dimensions, ScrollView} from "react-native";
import * as assets from 'Triplus_Components/assets/image'

const {width, height} = Dimensions.get('window')
const screenWidth = width < height ? width : height

export default class WishListPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <ListItem
                    image={assets.packageImgList[5]}
                    date={'6월 21일부터 예약 가능'}
                    category={'상품 카테고리'}
                    title={'옛 신라의 정취를 느껴보는 여행! 경주 핵심 투어'}
                    TPPrice={'￦ 75,000'}
                    price={'￦ 110,000'}/>
                <ListItem
                    image={assets.packageImgList[4]}
                    date={'7월 4일부터 예약 가능'}
                    category={'상품 카테고리'}
                    title={'[버스 2박 3일] 전통과 현대가 공존하는 매력적인 도시, 서울\n' +
                    '을 돌아보다'}
                    TPPrice={'￦ 75,000'}
                    price={'￦ 110,000'}/>
            </ScrollView>
        )
    }
}

const ListItem = (props) => (
    <View style={styles.subContainer}>
        <ImageBackground source={props.image} style={styles.thumbnailImage}
                         imageStyle={{
                             borderRadius: 10
                         }}>
            <Image style={styles.wishListIcon} source={assets.wishListIcon}/>
            <Text style={styles.date}>{props.date}</Text>
        </ImageBackground>
        <Text style={styles.category}>{props.category}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.priceView}>
            <Text style={styles.TPPrice}>{props.TPPrice}</Text>
            <Text style={styles.price}>{props.price}</Text>
        </View>
    </View>

)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    subContainer: {
        paddingTop: 30,
        flex: 1,
    },
    thumbnailImage: {
        height: 200,
        resizeMode: 'contain',
        padding: 15,
        alignItems: 'flex-end',
        marginBottom: 15
    },
    wishListIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    date: {
        color: '#ffffff',
        fontSize: 12,
        marginTop: 138

    },
    category: {
        color: '#777777',
        fontSize: 12,
        marginBottom: 10
    },
    title: {
        color: '#333333',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 15
    },
    priceView: {
        flexDirection: 'row'
    },
    TPPrice: {
        marginRight: 10,
        color: '#f20c49',
        fontSize: 14,
        fontWeight: 'bold'
    },
    price: {
        color: '#bbbbbb',
        fontSize: 12,
        textDecorationLine: 'line-through'
    }

})