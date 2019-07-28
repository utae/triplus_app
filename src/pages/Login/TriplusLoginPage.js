import React, {Component} from 'react';
import {
    AsyncStorage,
} from "react-native"

import {theme} from "../../constants/ComponentTheme";
import BackButton from "../../components/Header/BackButton";

import {login, registration} from "../../constants/API";

type Props = {};
export default class TriplusLoginPage extends Component<Props> {

    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <BackButton
                    theme={theme.DARK}/>
            )
        };
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _login = ({email, password}) => {
        fetch(login, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                AsyncStorage.setItem("triplusToken", responseJson.token);
                AsyncStorage.setItem("userInfo", JSON.stringify(responseJson.user));
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }