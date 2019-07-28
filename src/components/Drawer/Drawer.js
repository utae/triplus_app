import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image, TouchableOpacity,
} from 'react-native';

import {SafeAreaView} from "react-navigation";

import DrawerProfile from './DrawerProfile';

import {xBlack, settings, wishList, bookingList, likeList} from 'image/Drawer'


export default class Drawer extends Component{

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <TouchableOpacity>
                        <View style={{flexDirection: 'row',}}>
                            <Image
                                source={settings}
                                style={{ width: 15, height: 15}}/>
                            <Text style={{fontSize: 12, color: '#666666'}}>
                                설정
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.props.navigation.closeDrawer}>
                        <Image
                            source={xBlack}
                            style={{width: 30, height:30}}/>
                    </TouchableOpacity>
                </View>
                <DrawerProfile/>
                <Divider/>
                <MenuWithIcon
                    icon={wishList}
                    title="위시리스트"/>
                <Divider/>
                <MenuWithIcon
                    icon={bookingList}
                    title="예약내역"/>
                <Divider/>
                <MenuWithIcon
                    icon={likeList}
                    title="좋아요"/>
                <Divider/>
                <Text style={[styles.menu, {fontSize: 12, color: '#333333'}]}>
                    언어 / 통화
                </Text>
                <Divider/>
                <Text style={[styles.menu, {fontSize: 12, color: '#333333'}]}>
                    친구초대
                </Text>
                <Divider/>
                <Text style={[styles.menu, {fontSize: 12, color: '#333333'}]}>
                    문의하기
                </Text>
                <Divider/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 30,
        paddingTop: 30,
        paddingRight: 20,
    },

    menu: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 10,
        alignItems: 'center',
    }
});

const Divider = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#dedede'}}/>
        </View>
    );
};

const MenuWithIcon = (props) => {
    return (
        <View style={styles.menu}>
            <Image
                source={props.icon}
                style={{width: 18, height: 18, marginRight: 5}}/>
            <Text style={{fontSize: 14, color: '#000000'}}>
                {props.title}
            </Text>
        </View>
    );
};