import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, TextInput, ScrollView, TouchableOpacity, Dimensions} from "react-native";
import * as assets from "../../../assets";

const {width, height} = Dimensions.get('window')
const screenWidth = width < height ? width : height

export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
    }

    _renderMoreContent = () => {
        this.setState({display: !this.state.display})
    }

    _renderReViewImages(props) {
        if(props!=null){
            return (
                props.map(function (images, index) {
                    return (
                        <View style={{width: screenWidth, height: 150, marginRight: 10}}>
                            <Image source={images}
                                   style={{width: '100%', height: '100%', borderRadius: 10}}></Image>
                        </View>
                    )
                })
            )
        }
        else{
            return null;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*리뷰내용헤더*/}
                <View style={styles.header}>
                    <Image source={this.props.profileImage}
                           style={styles.profileImage}/>
                    <View style={{flex: 5}}>
                        <Text style={{fontSize: 14}}>{this.props.name}</Text>
                        <Text style={{fontSize: 10, color: '#888888'}}>{this.props.date}</Text>
                    </View>
                    <Image source={this.props.starScore}
                           style={{flex: 2, resizeMode: 'contain'}}></Image>
                </View>
                {/*게시물의 상품리뷰*/}
                <TouchableOpacity onPress={this._renderMoreContent}>
                    <TextInput
                        multiline={true}
                        numberOfLines={2}
                        editable={false}
                        selectTextOnFocus={false}
                        style={{fontSize: 13, width: '100%', color: '#333333'}}>이곳에는 게시물의 상품리뷰 {'\n'} 게시글 작성에 따라 다음과 같이
                        나타날 수 있습니다.</TextInput>
                </TouchableOpacity>

                {this.state.display ? (<ScrollView
                    horizontal={true}
                    style={{marginBottom: 19}}>
                    {this._renderReViewImages(this.props.images)}
                </ScrollView>) : <View/>}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1, borderBottomColor: '#dedede', marginBottom: 20
    },
    header: {
        flexDirection: 'row', marginBottom: 16
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
        flex: 1,
        marginRight: 10
    }
})
