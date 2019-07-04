import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
} from 'react-native';

import MixedList, {itemType} from "../../components/List/MixedList";
import TopBarSearchBar from "../../components/TopBar/TopBarSearchBar";
import BackButton from "../../components/TopBar/BackButton";
import {theme} from '../../constants/ComponentTheme'
import CityHeader from "./CityHeader";
import DrawerButton from "../../components/TopBar/DrawerButton";

import { info01, info02, package01, package02, review01, review02 } from 'Triplus/assets/image'

type Props = {};
export default class CityMainPage extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle:
                <TopBarSearchBar
                    placeholder="키워드 검색"
                    theme={navigation.getParam("headerTransparent") ? theme.LIGHT : theme.DARK}/>,
            headerLeft: (
                <BackButton
                    theme={navigation.getParam("headerTransparent") ? theme.LIGHT : theme.DARK}/>
            ),
            headerRight: (
                <DrawerButton
                    theme={navigation.getParam("headerTransparent") ? theme.LIGHT : theme.DARK}
                    onPress={navigation.openDrawer}/>
            ),
            headerTransparent: navigation.getParam("headerTransparent"),
        };
    };

    _onScroll = (event) => {
        if(this.props.navigation.getParam("headerTransparent") && event.nativeEvent.contentOffset.y >= 250){
            this.props.navigation.setParams({"headerTransparent": false})
        }
        if(!this.props.navigation.getParam("headerTransparent") && event.nativeEvent.contentOffset.y < 250){
            this.props.navigation.setParams({"headerTransparent": true})
        }
    };

    render() {
        let dataSource = [
            {type: itemType.TripInfo, source: info01, title: "대전 스카이로드 주변 \n 추천 맛집"},
            {type: itemType.TripPackage, source: package01, title: "상품 1", price: "300000"},
            {type: itemType.TripPackage, source: package02, title: "상품 2", price: "450000"},
            {type: itemType.TripInfo, source: info02, title: "정보 2"},
            {type: itemType.TripInfo, source: review01, title: "정보 3", price: "720000"},
            {type: itemType.TripPackage, source: review02, title: "상품 3", price: "720000"}
        ];

        return (
            <View style={styles.container}>
                <MixedList
                    data={dataSource}
                    header={
                        <CityHeader
                        img={this.props.navigation.getParam("city").main_img}
                        cityName={this.props.navigation.getParam("city").name}/>
                    }
                    onScroll={this._onScroll}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    image: {
        flex: 1,
        height: 300,
        resizeMode: 'cover',
    },
});