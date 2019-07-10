import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, ScrollView} from "react-native";
import * as assets from "../../../assets";
import ReviewHeader from "./ReviewHeader";
import ReviewContent from "./ReviewContent";
import ReviewButton from "./ReviewButton";


export default class App extends Component<Props> {

    render() {
        return (
            <View>
                {/*리뷰화면 헤더*/}
                <ReviewHeader reviewCount={135}/>
                {/*리뷰내용*/}
                {/*리뷰1*/}
                <ReviewContent
                    profileImage={assets.profileImages.박보검}
                    name={'박보검'}
                    date={'2019년 5월 31일'}
                    starScore={assets.startImage["4점"]}
                    images={assets.images}/>
                {/*리뷰2*/}
                <ReviewContent
                    profileImage={assets.profileImages.아이유}
                    name={'아이유'}
                    date={'2019년 5월 31일'}
                    starScore={assets.startImage["4점"]}/>
                {/*리뷰3*/}
                <ReviewContent
                    profileImage={assets.profileImages.태연}
                    name={'태연'}
                    date={'2019년 5월 31일'}
                    starScore={assets.startImage["4점"]}/>
                {/*리뷰내용끝*/}
                {/*리뷰더보기버튼*/}
                <ReviewButton/>
                {/*리뷰화면끝*/}
            </View>
        )
    }
}

