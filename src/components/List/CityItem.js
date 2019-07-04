import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

export default class CityItem extends Component{

    render(){

        return (
            <TouchableOpacity
                style={{flex:0.5}}
                activeOpacity={0.5}
                onPress={this.props.onPress}
            >
                <ImageBackground
                    style={styles.image}
                    imageStyle={{ borderRadius: 10 }}
                    source={this.props.source}
                >
                    <Text style={styles.title}>
                        {this.props.cityName}
                    </Text>
                    <View style={{alignItems: 'center'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={[styles.hashTag, {marginRight: 15}]}>
                                #{(this.props.hashTag[0]).name}
                            </Text>
                            <Text style={styles.hashTag}>
                                #{(this.props.hashTag[1]).name}
                            </Text>
                        </View>
                        <Text style={styles.hashTag}>
                            #{(this.props.hashTag[2]).name}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    image: {
        flex: 1,
        height: 200,
        borderRadius: 10,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 7,
    },

    title: {
        fontSize: 20,
        color: "#ffffff",
        marginTop: 20,
        fontWeight: 'bold'
    },

    hashTag: {
        fontSize: 16,
        color: "#ffffff",
    },
});