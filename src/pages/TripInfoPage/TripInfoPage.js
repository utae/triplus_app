import React, {Component} from 'react';
import {
    View,
    ImageBackground, Image, Text, ActivityIndicator
} from 'react-native';

import ViewPager from "@react-native-community/viewpager";

import {theme} from "../../constants/ComponentTheme";
import BackButton from "../../components/Header/BackButton";

import TripInfoMain from "./TripInfoMain";
import SeeAllButton from "../../components/Header/SeeAllButton";
import * as images from "../../../assets/image/TripInfo";
import * as API from "../../constants/API";
import TripInfoDetail from "./TripInfoDetail";


type Props = {
    tripInfo: any
};

type State = {
    isLoading: boolean;
};

export default class TripInfoPage extends Component<Props, State> {
    state = {
        isLoading: true,
    };

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: null,
            headerLeft: (
                <BackButton
                    theme={theme.LIGHT}/>
            ),
            headerRight: (
                <SeeAllButton/>
            ),
            headerTransparent: true,
        };
    };

    componentDidMount(): void {
        this._fetchTripInfoDetailData();
    }

    _fetchTripInfoDetailData = () => {
        const id = this.props.navigation.getParam('tripInfo').id;

        fetch(API.TRIP_INFO_DETAIL(id))
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    details: responseJson,
                    isLoading: false,
                });
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    _renderDetails = (details) => {
        let renderList=[];

        details.forEach((detail, index) => {
            renderList.push(
                <TripInfoDetail
                    key={index+1}
                    img={{uri: detail.image}}
                    text={detail.text}/>
            );
        });
        return renderList;
    };

    render() {
        const tripInfo = this.props.navigation.getParam('tripInfo');

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <ImageBackground
                source={{uri: tripInfo.main_img}}
                style={{flex: 1, resizeMode: 'cover'}}>
                <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,.5)'}}>
                    <ViewPager
                        style={{flex: 1}}>
                        <View>
                            <TripInfoMain
                                city={tripInfo.city.name}
                                title={tripInfo.title}
                                author={tripInfo.author.username}
                                created_at={tripInfo.created_at}
                                hashTags={tripInfo.hash_tag_set}/>
                        </View>

                        {this._renderDetails(this.state.details)}

                    </ViewPager>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', bottom: 25, right: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            source={images.like_off}/>
                        <Text style={{fontSize: 16, color: '#ffffff', marginLeft: 5, marginRight: 20}}>
                            216
                        </Text>
                        <Image
                            source={images.comment}/>
                        <Text style={{fontSize: 16, color: '#ffffff', marginLeft: 5}}>
                            37
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}