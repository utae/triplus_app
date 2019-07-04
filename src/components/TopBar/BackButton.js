import React, {Component} from 'react';
import {
    TouchableOpacity,
    Image,
} from 'react-native';

import { withNavigation } from 'react-navigation';

import {backBtnBlack, backBtnWhite} from 'Triplus/assets/image'

import {theme} from '../../constants/ComponentTheme'

class BackButton extends Component{

    render(){
        return (
            <TouchableOpacity
                style={{
                    marginLeft: 15
                }}
                activeOpacity={0.5}
                onPress={() => { this.props.navigation.goBack()}}>
                <Image
                    source={this.props.theme === theme.DARK ? backBtnBlack : backBtnWhite}/>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(BackButton);