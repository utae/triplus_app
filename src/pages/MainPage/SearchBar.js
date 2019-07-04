import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';

import {mainSearchBtn} from 'Triplus/assets/image';

export default class SearchBar extends Component{

    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.roundButton}
                    activeOpacity={0.5}
                    onPress={this.props.onPress}>
                    <Text style={styles.text}> 어디로 떠날까요? </Text>
                    <Image
                        source={mainSearchBtn}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },

    roundButton: {
        flex: 1,
        flexDirection:'row',
        height: 60,
        padding: 10,
        borderWidth: 1,
        borderColor: "#dedede",
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
    },

    text: {
        flex: 1,
        fontSize: 20,
        color: "#999999"
    },

    icon: {
        width: 40,
        height: 40,
    }
});