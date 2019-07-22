import React, {Component} from 'react';
import {Image, Text, StyleSheet, View} from "react-native";
import * as assets from 'Triplus_Components/assets/image'


export default class ReservationHistoryPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            option: ['선택한 옵션이 표시됩니다.', '선택한 옵션이 표시됩니다.']
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ListItem
                    image={assets.packageImgList[5]}
                    title={'옛 신라의 정취를 느껴보는 여행!\n' +
                    '경주 핵심 투어'}
                    date={'2019년 12월 31일'}
                    option={this.state.option}
                    price={'￦ 75,000'}
                />
            </View>
        )
    }
}

const ListItem = (props) => (
    <View style={styles.listItem}>
        <Image style={styles.thumbnailImage}
               source={props.image}
        />
        <View style={styles.subContainer}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Image style={styles.cancelIcon} source={assets.cancelIcon}/>
            </View>
            <Text style={styles.date}>{'날짜 선택 : ' + props.date}</Text>
            {props.option.map(function (options,index) {
                return <Text style={styles.options} key={index}>{'옵션 선택 : ' + options}</Text>
            })
            }
            <View style={{backgroundColor: '#e1e1e1', height: 1, marginTop: 19, marginBottom: 10}}/>
            <Text style={styles.price}>{props.price}</Text>
        </View>
    </View>
)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight:15,
        paddingTop:30
    },
    listItem: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#e1e1e1'
    },
    subContainer: {
        flex:1,
        paddingLeft: 15,
    },
    thumbnailImage: {
        width: 50,
        height: 50,
        borderRadius:50,
        borderWidth:1,
        resizeMode:'cover',
        overflow:'hidden'
    },
    title: {
        color: '#333333',
        fontSize: 14,
        fontWeight: 'bold',

    },
    cancelIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    date: {
        marginBottom: 10,
        color: '#777777',
        fontSize: 14
    },
    options: {
        color: '#777777',
        fontSize: 14
    },
    price: {
        color: '#f20c49',
        fontSize: 14,
        fontWeight: 'bold'
    }


})