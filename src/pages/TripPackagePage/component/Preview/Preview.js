import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View,StyleSheet} from "react-native";
import PreviewPageButton from "./PreviewButton";
import * as assets from "../../../assets";

import {Class} from "@babel/types";

export default class App extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <View style={{flexDirection: 'row', height: 22}}>
                    <Image source={assets.locationIcon}></Image>
                    <Text>충남,아산</Text>
                </View>
                <Text style={styles.preViewTitle}>충남 아산 '지중해 마을
                    투어'</Text>
                <Text style={styles.preViewSubTitle}>한국에 온 그리스.스위스 ... 주말 난 미니유럽
                    간다</Text>
                <Text style={styles.preViewPrice}>₩ 75,000</Text>
                {/*버튼들*/}
                <View style={styles.preViewButtons}>
                    <PreviewPageButton icons={assets.goodIcon} title={'좋아요'}/>
                    <PreviewPageButton icons={assets.reviewReadIcon} title={'리뷰보기'}/>
                    <PreviewPageButton icons={assets.shareIcon} title={'공유하기'}/>
                </View>
                <LineDivider/>
            </View>
        )

    }
}

const LineDivider = () =>{
    return(
        <View style={{borderColor: '#dedede', borderWidth: 1, marginBottom: 41}}/>
    )

}

const styles = StyleSheet.create({
    preViewTitle: {
        fontSize: 23, color: '#000000', marginTop: 4, marginBottom: 3
    },
    preViewSubTitle: {
        fontSize: 14, color: '#333333', marginBottom: 12
    },
    preViewPrice: {
        fontSize: 20, color: '#f20c49', marginBottom: 27
    },
    preViewButtons: {
        flexDirection: 'row', justifyContent: 'space-around', marginBottom: 14
    }
})
