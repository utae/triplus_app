import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import Dimensions from "react-native/Libraries/Utilities/Dimensions";

const {width} = Dimensions.get('window');

type Props = {
    img: any,
    text: string,
};
export default class TripInfoDetail extends Component<Props>{

    render() {

        return (
            <View style={styles.container}>
                <Image
                    source={this.props.img}
                    style={styles.img}
                    />
                <Text style={styles.text}>
                    {this.props.text}
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'rgba(0,0,0,.8)'
    },

    img: {
        width: (width - 30),
        height: (width - 30),
        borderRadius: 10,
    },

    text: {
        fontSize: 16,
        color: '#ffffff',
        lineHeight: 30,
        marginTop: 30,
    }
});