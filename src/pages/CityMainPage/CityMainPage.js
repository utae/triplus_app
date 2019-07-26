import React, {Component} from 'react';
import {
    View,
    StyleSheet, ActivityIndicator,
} from 'react-native';

import MixedList, {itemType} from "../../components/List/MixedList";
import TopBarSearchBar from "../../components/TopBar/TopBarSearchBar";
import BackButton from "../../components/TopBar/BackButton";
import {theme} from '../../constants/ComponentTheme'
import CityHeader from "./CityHeader";
import DrawerButton from "../../components/TopBar/DrawerButton";

import { info01, info02, package01, package02, review01, review02 } from 'Triplus/assets/image'
import * as API from "../../constants/API";

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

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount(): void {
        this._fetchTripInfoData();
    }

    _onScroll = (event) => {
        if(this.props.navigation.getParam("headerTransparent") && event.nativeEvent.contentOffset.y >= 250){
            this.props.navigation.setParams({"headerTransparent": false})
        }
        if(!this.props.navigation.getParam("headerTransparent") && event.nativeEvent.contentOffset.y < 250){
            this.props.navigation.setParams({"headerTransparent": true})
        }
    };

    _fetchTripInfoData = () => {
        fetch(API.TRIP_INFO_LIST)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    originalData: responseJson,
                });
                this._fetchTripPackageData();
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    _fetchTripPackageData = () => {
        fetch(API.TRIP_PACKAGE_LIST)
            .then((response) => response.json())
            .then((responseJson) => {
                let mixedData = this.state.originalData.concat(responseJson);
                if(mixedData.length > 1){
                    mixedData.sort((a,b) => (a.created_at < b.created_at ? -1 : 1));
                }
                console.log(mixedData);
                this.setState({
                    originalData: mixedData,
                    data: mixedData,
                    isLoading: false,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <MixedList
                    data={this.state.data}
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