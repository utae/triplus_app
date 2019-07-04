import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';
import Dimensions from "react-native/Libraries/Utilities/Dimensions";

const {height, width} = Dimensions.get('window');

export default class LandscapeBanner extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={this.props.source}
                />
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
                <Text style={styles.subtitle}>
                    {this.props.subtitle}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginRight: 15,
    },

    image: {
        width: (width-30),
        height: 220,
        borderRadius: 10,
        resizeMode: 'contain'
    },

    title: {
        fontSize: 20,
        color: "#000000",
        marginTop: 15,
    },

    subtitle: {
        fontSize: 14,
        color: "#666666",
        marginTop: 10,
    },
});