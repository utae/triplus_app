import React, {Component} from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
    Image
} from "react-native";

import { partlyCloudy } from 'image/CityMain'

export default class MixedList extends Component{

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <ImageBackground
                    source={{uri: this.props.img}}
                    style={styles.image}
                >
                    <View
                        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.cityName}>
                            {this.props.cityName}
                        </Text>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                            <Text style={styles.temperature}>
                                21℃
                            </Text>
                            <Image
                                source={partlyCloudy}
                                style={{width:40, height:40}}/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 300,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 30,
    },
    cityName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    temperature: {
        fontSize: 20,
        color: '#ffffff'
    }
});