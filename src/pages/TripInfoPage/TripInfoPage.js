import React, {Component} from 'react';
import {
    View,
    Image
} from 'react-native';

import { IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';

import {theme} from "../../constants/ComponentTheme";
import BackButton from "../../components/TopBar/BackButton";
import DrawerButton from "../../components/TopBar/DrawerButton";
import Dimensions from "react-native/Libraries/Utilities/Dimensions";

import { tripInfoList } from 'Triplus/assets/image'

const {width, height} = Dimensions.get('window');
const images = tripInfoList;


type Props = {};
export default class TripInfoPage extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: null,
            headerLeft: (
                <BackButton
                    theme={theme.LIGHT}/>
            ),
            headerRight: (
                <DrawerButton
                    theme={theme.LIGHT}
                    onPress={navigation.openDrawer}/>
            ),
            headerTransparent: true,
        };
    };

    renderImages(){
        let imgList=[];
        for(let i=0;i<images.length;i++){
            imgList.push(
                <View
                    key={i}>
                    <Image source={images[i]} style={{width: width, height: height, resizeMode: 'cover',}} />
                </View>
            )

        }
        return imgList
    }

    render() {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{flex:1}}
                >
                    {this.renderImages()}
                </IndicatorViewPager>
            </View>
        );
    }
}