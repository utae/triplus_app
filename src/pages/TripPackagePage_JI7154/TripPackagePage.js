import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, View,
    ScrollView, Image, TouchableOpacity, Dimensions,
    TextInput
} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import * as assets from './assets'
import Preview from './component/Preview'
import Notice from './src/component/Notice'
import PageDivider from './src/component/Divider/PageDivider'
import Map from './src/component/Map'
import Review from './src/component/Review'
import Recommend from './src/component/Recommend'

const {width, height} = Dimensions.get('window')
const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width


type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>

                <ScrollView style={styles.scrollView}>
                    {/*ViewPager 이미지들*/}
                    <IndicatorViewPager
                        style={{width: '100%', height: 200, marginBottom: 20}}
                        indicator={this._renderDotIndicator()}
                    >
                        {this.renderImages()}
                    </IndicatorViewPager>
                    {/*상품프리뷰*/}
                    <Preview/>
                    {/*상품상세페이지*/}
                    {/*알림*/}
                    <Notice/>
                    {/*구분선*/}
                    <PageDivider/>
                    {/*지도 부분*/}
                    <Map/>
                    {/*구분선*/}
                    <PageDivider/>
                    {/*리뷰화면*/}
                    <Review/>
                    {/*구분선*/}
                    <PageDivider/>
                    {/*추천상품*/}
                    <Recommend/>
                </ScrollView>
            </View>
        );
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={assets.images.length}/>;
    }

    renderImages() {
        return(
            assets.images.map(function (images,index) {
                return(
                    <View key={index}>
                        <Image source={images} style={{width: '100%', height: '100%', borderRadius: 10}}></Image>
                    </View>
                )
            })
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        width: '100%',
        marginBottom: 4,
        paddingLeft: 15,
        paddingRight: 15,
    },
    navBar: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderBottomColor: '#19000000',
        borderBottomWidth: 1,
    },


});
