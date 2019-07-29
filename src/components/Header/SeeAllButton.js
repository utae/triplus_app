import React, {Component} from 'react';
import {
    TouchableOpacity,
    Image,
} from 'react-native';

import { withNavigation } from 'react-navigation';

import {see_all} from 'image/Header'

class SeeAllButton extends Component{

    render(){
        return (
            <TouchableOpacity
                style={{
                    marginRight: 15
                }}
                activeOpacity={0.5}
                onPress={() => {}}>
                <Image
                    source={see_all}/>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(SeeAllButton);