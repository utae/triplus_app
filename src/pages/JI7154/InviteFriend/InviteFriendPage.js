import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity, FlatList, Dimensions} from "react-native";
import * as assets from 'Triplus_Components/assets/image'

const {width, height} = Dimensions.get('window')
const screenWidth = width < height ? width : height

type Props={
    inviteCode:string,
};

type State={
    datas:Object
};

export default class InviteFriendPage extends Component<Props,State> {
    constructor(props) {
        super(props);
        this.state = {
            datas: [
                {image: assets.kakaoTalkIcon, name: '카카오톡'},
                {image: assets.kakaoStoryIcon, name: '카카오스토리'},
                {image: assets.facebookIcon, name: '페이스북'},
                {image: assets.twitterIcon, name: '트위터'},
                {image: assets.pinterestIcon, name: 'Pinterest'},
                {image: assets.instagramIcon, name: '인스타그램'},
                {image: assets.URLCopyIcon, name: 'URL 복사'},
                {image: assets.moreIcon, name: '더보기'},
            ]
        }

    }

    _renderSNSInvite(item) {
        return (
            <View style={styles.listItem}>
                <Image source={item.image}
                       style={[styles.SNSIcon,
                           item.name == 'URL 복사' ? {backgroundColor: '#fc7676'} : {},
                           item.name == '더보기' ? {
                               backgroundColor: '#000000', transform: [{rotate: '90deg'}]} : {}]}/>
                <Text>{item.name}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainerTop}>
                    <Text style={styles.title}>{'친구를\n초대해보세요 !'}</Text>
                    <View style={styles.inviteCodeView}>
                        <Text>{this.props.inviteCode}</Text>
                        <TouchableOpacity style={styles.copyCodeButton}>
                            <Text style={styles.inviteFriendCodeText}>{'친구초대코드'}</Text>
                            <Text style={styles.copyText}>{'복사하기'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 18}}>
                        <Image style={styles.InviteIcon} source={assets.inviteFriendIcon}/>
                        <Text style={styles.plainText}>{'초대받은 친구는 가입하자마자 '}</Text>
                        <Text style={styles.pointText}>{'3000포인트 '}</Text>
                        <Text style={styles.plainText}>{'적립'}</Text>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 10, marginBottom: 42}}>
                        <Image style={styles.InviteIcon} source={assets.inviteFriendIcon}/>
                        <Text style={styles.plainText}>{'초대받은 친구가 가입완료하면 나에게도 '}</Text>
                        <Text style={styles.pointText}>{'3000포인트 '}</Text>
                        <Text style={styles.plainText}>{'적립'}</Text>
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#f7f7f7',
                    height: 8,
                }}></View>
                {/*PageDivider*/}
                <View style={styles.subContainerBottom}>
                    <Text style={styles.bottomTitle}>{'초대하기'}</Text>
                </View>
                <FlatList
                    data={this.state.datas}
                    renderItem={({item}) => this._renderSNSInvite(item)}
                    numColumns={4}
                    keyExtractor={(item) => item.name}
                    style={{paddingLeft:20,paddingRight:20}}/>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainerTop: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 23
    },
    title: {
        color: '#333333',
        fontSize: 27,
        lineHeight: 37.8,
        fontWeight: 'bold',
        marginBottom: 17,
    },
    inviteCodeView: {
        height: 45,
        borderRadius: 5,
        borderColor: '#f20c49',
        borderWidth: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden'
    },
    inviteCodeText: {
        color: '#999999',
        fontSize: 18
    },
    copyCodeButton: {
        backgroundColor: '#f20c49',
        width: 120,
        height: 43,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inviteFriendCodeText: {
        color: '#ffffff',
        fontSize: 11,
    },
    copyText: {
        fontSize: 15,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    inviteIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginRight: 4
    },
    plainText: {
        fontSize: 13,
        color: '#666666'
    },
    pointText: {
        fontSize: 13,
        color: '#5963bc'
    },
//    상단 컴포넌트 끝

    subContainerBottom: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 30,
    },
    bottomTitle: {
        fontSize: 16,
        color: '#000000',
        marginBottom: 25,

    },
    listItem: {
        flex: 1,
        aspectRatio:1,
        borderRadius: 15,
        backgroundColor: '#fcfcfc',
        shadowColor: '#19000000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
    SNSIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        resizeMode: 'cover'
    },
    SNSName: {
        fontSize: 10,
        color: '#666666'
    }

})