import React, {Component} from 'react';
import {Text, View,StyleSheet} from "react-native";

export default class App extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{marginBottom: 40}}>
                <Text style={styles.noticeCategory}>{this.props.category}</Text>
                <Text style={styles.noticeTitle}>{this.props.title}</Text>
                <Text style={styles.noticeContent}>
                    {'이곳에는 게시물의 본문이 나타납니다.\n' +
                    '게시글 작성에 따라 다음과 같이 강조되어 나타날 수\n' +
                    '있습니다.\n\n'}
                </Text>
                <Text style={styles.noticeHighlight}>
                    {'강조문은 이렇게 표현됩니다.\n\n'}
                </Text>
                <Text style={styles.noticeContent}>{
                    '나머지 내용은 이렇게 이어지고 있습니다.\n' +
                    '상황에 따라 중간에 이미지가 들어갈 수도 있습니다.\n\n'
                }</Text>
                <Text style={styles.noticeContent}>
                    {'혹시나 상단의 이미지를 사용하지 않는 경우에는,\n' +
                    '저 공간의 90px만큼의 간격을 둔 후에 내용을 표시하시면 됩니다.'}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    noticeCategory: {
        fontSize: 12, color: '#f20c49'
    },
    noticeTitle: {
        fontSize: 16, color: '#000000', marginBottom: 39
    },
    noticeContent: {
        color: '#333333', width: 310, lineHeight: 25
    },
    noticeHighlight: {
        color: '#f20c49', width: 310, lineHeight: 25
    }
})
