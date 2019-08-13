import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput} from "react-native";
import * as assets from 'Triplus_Components/assets/image'
import update from "react-addons-update";

type Props = {
    profileImage: number,
    userName: string,
    date: string,
    content: string,
    likeActive: boolean,
    replyCount: number

}

type State = {
    replies: [
        {
            profileImage: number,
            userName: string,
            date: string,
            content: string,
            likeActive: boolean,
            likeCount: number,
        }
        ]
}
export default class App extends Component<Props,State> {
    constructor(props) {
        super(props);
        this.state = {
            replies: [
                {
                    profileImage: assets.profileImgList[0],
                    userName: 'Username',
                    date: '2019년 5월 31일',
                    content: '답글의 경우 이렇게 표현이 됩니다.\n' +
                        '댓글과는 다르게 하단 답글 정보가 없습니다.',
                    likeActive: false,
                    likeCount: 17,
                },
                {
                    profileImage: assets.profileImgList[1],
                    userName: 'Username',
                    date: '2019년 5월 31일',
                    content: '답글의 경우 이렇게 표현이 됩니다.\n' +
                        '댓글과는 다르게 하단 답글 정보가 없습니다.',
                    likeActive: false,
                    likeCount: 17,

                }
            ]
        }
    }

    likeOnpress = (key) => {
        const value = !this.state.replies[key].likeActive
        const likeCount = value ? this.state.replies[key].likeCount + 1 : this.state.replies[key].likeCount - 1
        this.setState({
            replies: update(
                this.state.replies, {
                    [key]: {
                        likeActive: {$set: value},
                        likeCount: {$set: likeCount}
                    }
                }
            ),
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {/*댓글*/}
                    <View style={styles.itemContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                            <Image style={styles.profileImage} source={this.props.profileImage}/>
                            <View>
                                <Text style={styles.userName}>{this.props.userName}</Text>
                                <Text style={styles.date}>{this.props.date}</Text>
                            </View>
                            <TouchableOpacity style={styles.moreButton}>
                                <Image source={assets.moreIcon}/>
                            </TouchableOpacity>
                        </View>
                        {/*상단 부분*/}
                        <Text style={styles.content}>{this.props.content}</Text>
                        {/*댓글 내용 부분*/}
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 15}}>
                            <TouchableOpacity onPress={this.props.likeOnPress}>
                                <Image style={styles.likeIcon}
                                       source={this.props.likeActive ? assets.activeLike : assets.unactiveLike}/>
                            </TouchableOpacity>
                            <Text style={styles.likeCount}>{this.props.likeCount}</Text>
                            <Image style={styles.replyIcon} source={assets.replyIcon}/>
                            <Text style={styles.replyCount}>{this.props.replyCount}</Text>
                        </View>
                    </View>
                    <Divider/>

                    {/*답글 렌더링*/}
                    {this.state.replies.map((item, index) => {
                        return (
                            <View>
                                <ReplyListItem
                                    key={index}
                                    profileImage={item.profileImage}
                                    userName={item.userName}
                                    date={item.date}
                                    content={item.content}
                                    likeActive={item.likeActive}
                                    likeCount={item.likeCount}
                                    likeOnPress={() => this.likeOnpress(index)}
                                    replyCount={item.replyCount}
                                />
                                <Divider/>
                            </View>
                        )
                    })}

                </ScrollView>
                {/*하단 댓글 입력창*/}
                <View style={styles.replyView}>
                    <TextInput
                        placeholder={'댓글을 입력하세요.'}
                        style={{justifyContent: 'center', fontSize: 12, color: '#aaaaaa'}}>

                    </TextInput>
                    <Image style={{width: 20, height: 20, resizeMode: 'contain'}} source={assets.commentIcon}/>
                </View>
            </View>
        )
    }
}

const Divider = () => {
    return (
        <View style={{height: 1, backgroundColor: '#dedede'}}></View>
    )
}

const ReplyListItem = (props) => {
    return (
        <View style={styles.itemContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                <Image style={styles.replyIcon} source={assets.replyIcon}/>
                <Image style={styles.profileImage} source={props.profileImage}/>
                <View>
                    <Text style={styles.userName}>{props.userName}</Text>
                    <Text style={styles.date}>{props.date}</Text>
                </View>
                <TouchableOpacity style={styles.moreButton}>
                    <Image source={assets.moreIcon}/>
                </TouchableOpacity>
            </View>
            {/*상단 부분*/}
            <Text style={styles.replyContent}>{props.content}</Text>
            {/*댓글 내용 부분*/}
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 15}}>
                <TouchableOpacity onPress={props.likeOnPress}>
                    <Image style={styles.likeIcon} source={props.likeActive ? assets.activeLike : assets.unactiveLike}/>
                </TouchableOpacity>
                <Text style={styles.likeCount}>{props.likeCount}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 30,
    },
    itemContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        resizeMode: 'cover'
    },
    userName: {
        fontSize: 12,
        color: '#555555'
    },
    date: {
        fontSize: 10,
        color: '#888888'
    },
    moreButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
    },
    content: {
        flex: 1,
        fontSize: 12,
        color: '#777777'
    },
    replyContent: {
        paddingLeft: 20,
        flex: 1,
        fontSize: 12,
        color: '#777777'
    },
    likeIcon: {
        height: 15,
        width: 15,
        resizeMode: 'contain',
        marginRight: 5
    },
    likeCount: {
        fontSize: 10,
        color: '#777777',
        marginRight: 10,
    },
    replyIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginRight: 5,
    },
    replyCount: {
        fontSize: 10,
        color: '#777777'
    },
    replyView:{
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 15,
        left: 15,
        right: 15,
        paddingLeft: 10,
        paddingRight: 10,
        height: 40,
        borderWidth: 0.5,
        borderColor: '#bfbfbf',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})