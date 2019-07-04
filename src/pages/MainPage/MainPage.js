import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {
    StyleSheet,
    ScrollView,
    View,
    Text, Image, TouchableOpacity,
} from 'react-native';

import SearchBar from './SearchBar';
import LandscapeBanner from '../../components/List/LandscapeBanner';
import PortraitBanner from '../../components/List/PortraitBanner';
import HorizontalList from "../../components/List/HorizontalList";

import {backBtnBlack, landSampleBanner, portraitSampleBanner01, portraitSampleBanner02, rightArrowCircle} from 'Triplus/assets/image'


type Props = {};
export default class MainPage extends Component<Props> {

    componentDidMount(): void {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    }

    _onSearchBarPress = () => {
        this.props.navigation.navigate('SearchCityPage')
    };

    render() {
        return (
            <ScrollView style={styles.container}>

                <Text style={styles.title}>
                    즐거운 한국{"\n"}여행.
                </Text>

                <View style={styles.rowDirectionContainer}>
                    <SearchBar
                        onPress={this._onSearchBarPress}
                    />
                </View>

                <View style={styles.divider}/>

                <View style={styles.rowDirectionContainer}>
                    <HorizontalList
                        data={[{source: landSampleBanner, title: "2019 국내여행 트랜드", subtitle: "국내여행 가격비교 최대 30%할인 / 6월 30일까지"}, {source: landSampleBanner, title: "2019 국내여행 트랜드", subtitle: "국내여행 가격비교 최대 30%할인 / 6월 30일까지"}]}
                        renderItem={({item}) => (
                            <LandscapeBanner
                                source={item.source}
                                title={item.title}
                                subtitle={item.subtitle}
                            />
                        )}
                    />
                </View>

                <View style={styles.divider}/>

                <Text style={styles.bannerTitle}>
                    한국의 여유로운 휴양지 Best 5
                </Text>

                <View style={styles.rowDirectionContainer}>
                    <HorizontalList
                        data={[{source: portraitSampleBanner01, title: "강원도", subtitle: "22만원부터"}, {source: portraitSampleBanner02, title: "제주도", subtitle: "22만원부터"},{source: portraitSampleBanner01, title: "강원도", subtitle: "22만원부터"}, {source: portraitSampleBanner02, title: "제주도", subtitle: "22만원부터"}]}
                        renderItem={({item}) => (
                            <PortraitBanner
                                source={item.source}
                                title={item.title}
                                subtitle={item.subtitle}
                            />
                        )}
                    />
                </View>

                <View style={styles.divider}/>

                <View style={styles.rowDirectionContainer}>
                    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                        <Text style={{flex: 1, color: "#ffffff"}}>
                            <Text style={{fontSize: 16}}>
                                출발임박특가
                            </Text>
                            {"\n"}
                            <Text style={{fontSize: 12, marginTop: 10}}>
                                3주 이내 출발 상품 특가 모음
                            </Text>
                        </Text>
                        <Image
                            source={rightArrowCircle}
                            style={{width: 25, height: 25}}
                        />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    rowDirectionContainer: {
        flexDirection: 'row',
    },

    title: {
        height: 100,
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 46,
        marginLeft: 15,
        marginBottom: 16,
        color: "#333333"
    },

    bannerTitle: {
        fontSize: 20,
        marginLeft: 15,
        marginBottom: 20,
        color: "#000000"
    },

    button: {
        flex: 1,
        flexDirection:'row',
        height: 80,
        padding: 10,
        backgroundColor: "#5cccef",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 50,
        borderRadius: 10,
        alignItems: 'center',
    },

    divider: {
        height: 8,
        backgroundColor: "#f7f7f7",
        marginTop: 20,
        marginBottom: 20,
    }
});