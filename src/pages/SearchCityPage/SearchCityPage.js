import React, {Component} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, TextInput, View} from 'react-native';

import TopBarSearchBar from '../../components/TopBar/TopBarSearchBar';
import CityItem from '../../components/List/CityItem';

import BackButton from "../../components/TopBar/BackButton";
import {theme} from '../../constants/ComponentTheme'

import {CITY_LIST} from "../../constants/API";

type Props = {};
export default class SearchCityPage extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle:
                <TopBarSearchBar
                    placeholder="도시 검색"
                    theme={theme.DARK}/>,
            headerLeft: (
                <BackButton
                    theme={theme.DARK}/>
            )
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount(): void {
        this.fetchCityData();
    }

    fetchCityData() {
        fetch(CITY_LIST)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    originalData: responseJson,
                    city: responseJson,
                    isLoading: false,
                });
                this.props.navigation.setParams({onChangeText: this._onChangeText});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _onChangeText = (text) => {
        this.setState({city : this.state.originalData.filter((item) => (item.name.startsWith(text)))});
    };

    _onPress = (item) => {
        this.props.navigation.navigate("CityMainPage",
            {
                city: item,
                headerTransparent: true,
            })
    };

    render() {

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View style={styles.container}>

                <FlatList
                    style={{marginTop: 30, marginLeft: 7, marginRight: 7, marginBottom: 30}}
                    columnWrapperStyle={{}}
                    data={this.state.city}
                    extraData={this.state.city}
                    renderItem={({ item }) => (
                        <CityItem
                            onPress={()=>{this._onPress(item)}}
                            cityName={item.name}
                            source={{uri: item.main_img}}
                            hashTag={item.hash_tag_set}/>
                    )}
                    numColumns={2}
                    keyExtractor={(item, index) => item.id}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    rowDirectionContainer: {
        flexDirection: 'row',
    },
});