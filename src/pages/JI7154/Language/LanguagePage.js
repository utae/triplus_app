import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity, FlatList} from "react-native";
import * as assets from '../../../assets/image';

export default class LanguagePage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: {},
            languages: [
                'English (United Srates)',
                '한국어', '日本語',
                '中文(简体)', '中文(繁体)', 'Le français'
            ]
        }
        this._selected=this._selected.bind(this)
    }

    _selected(item){
        this.setState({
            selectedLanguage: item
        })
    }

    render() {
        const selectLang = this.state.selectedLanguage
        return (
            <View style={styles.container}>
                <Divider/>
                {this.state.languages.map((item,key) =>{
                        return (
                            <TouchableOpacity
                                style={styles.listItem}
                                onPress={()=>this._selected(item)}>
                                < Text
                                    style={[styles.languageText, item==selectLang ? {color: '#f20c49'} : {}]}>
                                    {item}
                                </Text>
                                {item==selectLang ? <Image source={assets.checkedIcon}/> : <Image source={assets.unCheckedIcon}/>}
                            </TouchableOpacity>
                            // <ListItem
                            //     key={key}
                            // language={item}
                            // onPress={()=>this._selected(item)}
                            // selected={item==selectLang}>
                            // </ListItem>
                        )
                    }
                )
                }
            </View>
        )
    }

}

const Divider = () => (
    <View style={{height: 1, backgroundColor: '#dedede'}}/>
)

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 30,
    },
    listItem: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        borderBottomWidth:1,
        borderBottomColor:'#dedede'
    },
    languageText: {
        fontSize: 13,
        color: '#333333'
    }
})