import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity} from "react-native";
import * as assets from '../../../assets/image';
import Modal from 'react-native-modal'

type State = {
    modalVisible:boolean,
}

export default class LanguageCurrencyPage extends Component<Props,State> {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Divider/>
                <ListItem
                    image={assets.languageIcon}
                    title={'언어 설정'}
                    content={'한국어'}/>
                <Divider/>
                <ListItem
                    image={assets.currencyIcon}
                    title={'통화 수단'}
                    content={'KRW/₩'}/>

                <Divider/>


            </View>
        )
    }
}

const ListItem = (props) => {
    return (
        <View style={styles.list}>
            <View style={{flexDirection: 'row'}}>
                <Image source={props.image} style={styles.image}/>
                <Text style={styles.title}>{props.title}</Text>
            </View>

            <Text style={styles.content}>{props.content}</Text>
        </View>
    )

}

const Divider = () => (
    <View style={{height: 1, backgroundColor: '#dedede'}}/>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 30
    },
    list: {
        paddingLeft: 14,
        paddingRight: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        marginBottom: 1
    },
    image: {
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
    title: {
        marginLeft: 6,
        fontSize: 13,
        color: '#000000'
    },
    content: {
        fontSize: 13,
        color: '#f20c49'

    },

})