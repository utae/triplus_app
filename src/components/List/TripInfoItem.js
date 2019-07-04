import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    ImageBackground,
} from 'react-native';

export default class TripInfoItem extends Component{

    render(){

        return (
            <TouchableOpacity
                style={[styles.container, this.props.isLeft ? styles.leftItem : styles.rightItem]}
                activeOpacity={0.5}
                onPress={this.props.onPress}
            >
                <ImageBackground
                    style={styles.image}
                    imageStyle={{ borderRadius: 10 }}
                    source={this.props.source}
                >
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: 200,
        marginTop: 7,
        marginBottom: 7,
    },

    image: {
        flex: 1,
        borderRadius: 10,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    title: {
        fontSize: 16,
        color: "#ffffff",
        marginBottom: 20,
    },

    leftItem: {
        marginLeft: 14,
        marginRight: 7,
    },

    rightItem: {
        marginLeft: 7,
        marginRight: 14,
    },

});