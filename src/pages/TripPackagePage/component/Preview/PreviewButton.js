import React, {Component} from 'react';
import {Image, Text, TouchableOpacity,StyleSheet} from "react-native";


export default class App extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity style={styles.buttons}>
                <Image source={this.props.icons}></Image>
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
        )

    }
}

const styles = StyleSheet.create({
    buttons: {
        borderWidth: 1,
        borderRadius: 8,
        width: 100,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTitle:{
        fontSize: 13
    }
})
