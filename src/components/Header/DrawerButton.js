import React, {Component} from 'react';
import {
    TouchableOpacity,
    Image,
} from 'react-native';

import {drawerBtnBlack, drawerBtnWhite} from 'image/Header'

import {theme} from '../../constants/ComponentTheme'

export default class DrawerButton extends Component{

    render(){
        return (
            <TouchableOpacity
                style={{
                    marginRight: 15
                }}
                activeOpacity={0.5}
                onPress={this.props.onPress}>
                <Image
                    source={this.props.theme === theme.DARK ? drawerBtnBlack : drawerBtnWhite}/>
            </TouchableOpacity>
        )
    }
}