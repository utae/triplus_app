import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class DrawerProfile extends Component{

    render() {
        return (
            <View style={{marginTop: 50, marginBottom: 50,}}>
                <Text style={{fontSize: 16, color: "#aaaaaa", marginLeft: 10}}>
                    로그인을 해주세요.
                </Text>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <TouchableOpacity
                        style={[styles.roundButton, {borderColor: '#f20c49'}]}>
                        <Text style={{fontSize: 12, color: '#f20c49'}}>로그인</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.roundButton, {borderColor: '#666666'}]}>
                        <Text style={{fontSize: 12, color: '#666666'}}>회원가입</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    roundButton: {
        width: 70,
        height: 22,
        borderWidth: 1,
        marginRight: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
});