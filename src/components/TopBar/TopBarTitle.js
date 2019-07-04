import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class TopBarTitle extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Text style={{color: "#f20c49", fontSize: 22}}>
                    <Text style={{fontWeight: 'bold'}}>
                        TRIP
                    </Text>
                    LUS
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});