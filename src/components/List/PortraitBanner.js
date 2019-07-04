import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    ImageBackground,
} from 'react-native';

export default class PortraitBanner extends Component{
    render(){
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.image}
                    imageStyle={{ borderRadius: 10 }}
                    source={this.props.source}
                >
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </ImageBackground>
                <Text style={styles.subtitle}>
                    {this.props.subtitle}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
    },

    image: {
        width: 150,
        height: 190,
        borderRadius: 10,
        resizeMode: 'cover'
    },

    title: {
        fontSize: 16,
        color: "#ffffff",
        margin: 15,
    },

    subtitle: {
        fontSize: 14,
        color: "#666666",
        marginTop: 10,
    },
});