import React, {Component} from 'react';
import {
    View,
    FlatList,
} from 'react-native';

export default class HorizontalList extends Component{

    render() {
        return (
            <FlatList
                style={{flex: 1, marginLeft: 15,}}
                data={this.props.data}
                renderItem={this.props.renderItem}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
            />
        );
    }
}