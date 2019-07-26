import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    ImageBackground,
    View,
} from 'react-native';

export default class TripPackageItem extends Component{

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
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>
                                {this.props.title}
                            </Text>
                            <Text style={styles.price}>
                                ￦ {this.props.price}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 0.5,
        height: 200,
        margin: 7,
    },

    image: {
        flex: 1,
        borderRadius: 10,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    textContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fffffff0",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#e1e1e1",
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
    },

    title: {
        fontSize: 14,
        color: "#333333",
        marginBottom: 5,
    },

    price: {
        fontSize: 14,
        color: "#f20c49"
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