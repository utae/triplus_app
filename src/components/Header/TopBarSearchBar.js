import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';
import Dimensions from "react-native/Libraries/Utilities/Dimensions";

import { withNavigation } from 'react-navigation';

import {theme} from '../../constants/ComponentTheme'

const {width} = Dimensions.get('window');

class TopBarSearchBar extends Component{

    render(){
        return (
            <View style={styles.container}>
                <TextInput
                    style={[styles.input, this.props.theme === theme.DARK ? styles.dark : styles.light]}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.theme === theme.DARK ? '#aaaaaa' : '#dddddd'}
                    onChangeText={this.props.navigation.getParam("onChangeText")}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        width: (width - 120),
        fontSize: 16,
    },

    dark: {
        color: '#333333'
    },

    light: {
        color: '#ffffff'
    }
});

export default withNavigation(TopBarSearchBar);