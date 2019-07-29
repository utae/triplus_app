import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import * as images from 'image/TripInfo';

type Props = {
    city: string;
    title: string;
    author: string;
    created_at: string;
    hashTags: any;
};
export default class TripInfoMain extends Component<Props>{

    _renderHashTag = (hashTags) => {
        let renderList = [];

        hashTags.forEach((hashTag, index) => {
            renderList.push(
                <View style={[styles.roundedRectangle, {marginLeft:10}]}>
                    <Text style={{fontSize: 12, color: '#f20c49'}}>
                        #{hashTag.name}
                    </Text>
                </View>
            );
        });
        return renderList;
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowDirectionContainer}>
                    <Image
                        source={images.location}
                        style={{marginRight: 10}}/>
                    <Text
                        style={{fontSize: 14, color: '#efefef'}}>
                        {this.props.city}
                    </Text>
                </View>
                <Text
                    style={{fontSize: 20, color: '#ffffff', fontWeight: 'bold', marginTop: 20}}>
                    {this.props.title}
                </Text>
                <Text
                    style={{fontSize: 14, color: '#bfbfbf', marginTop: 20}}>
                    {this.props.created_at}
                </Text>
                <Text
                    style={{fontSize: 14, color: '#ffffff', marginTop: 10, marginBottom: 25}}>
                    {this.props.author}
                </Text>

                <View style={styles.rowDirectionContainer}>
                    {this._renderHashTag(this.props.hashTags)}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        paddingTop: 100,
        paddingRight: 20
    },

    rowDirectionContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    roundedRectangle: {
        marginRight: 5,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        padding: 3
    },
});