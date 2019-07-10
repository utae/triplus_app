import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, ScrollView} from "react-native";
import * as assets from '../../../assets'

export default class App extends Component<Props> {

    render() {
        return (
            <View>
                <View style={styles.mapInfo}>
                    {/*주소정보*/}
                    <View style={{flexDirection: 'row'}}>
                        <Image source={assets.mapIcon}/>
                        <Text style={styles.addressText}>충남 아산시 탕정면 탕정면로8번길 55-7</Text>
                    </View>
                    {/*연락처정보*/}
                    <View style={{flexDirection: 'row',}}>
                        <Image source={assets.phoneIcon}></Image>
                        <Text style={styles.phoneNumText}>041-532-9889</Text>
                    </View>
                </View>
                {/*지도API*/
                }
                <View style={styles.mapAPI}>
                    <Text>지도 API</Text>
                </View>
            </View>

    )
    }
}

const styles = StyleSheet.create({
    mapInfo: {
        borderColor: '#dedede',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        padding: 14
    },
    addressText:{
        fontSize: 13, marginLeft: 10
    },
    phoneNumText:{
        fontSize: 13, marginLeft: 10
    },
    mapAPI:{
        height: 150, borderWidth: 1, marginBottom: 45
    }
})
