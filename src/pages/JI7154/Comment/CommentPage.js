import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput} from "react-native";
import * as assets from 'Triplus_Components/assets/image'
import update from "react-addons-update";

type Props = {}

type State = {
    comments: {
        profileImage: Object,
        userName: string,
        date: string,
        content: string,
        likeActive: boolean,
        likeCount: number,
        replyCount: number,
    },
    commentText:string
}

export default class CommentPage extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {
                    profileImage: assets.profileImgList[0],
                    userName: 'Username',
                    date: '2019년 5월 31일',
                    content: '댓글 내용이 이곳에 표현됩니다. 말줄임표 없이 모든 내용이 표현되며, 댓글 내용이 늘어남에 따라 댓글 박스도 같이 늘어납니다. 몇 십줄이 되어도 댓글 내용은 모두 보이도록 합니다.',
                    likeActive: false,
                    likeCount: 17,
                    replyCount: 4
                },
                {
                    profileImage: assets.profileImgList[1],
                    userName: 'myname',
                    date: '2019년 5월 31일',
                    content: '댓글 내용이 이곳에 표현됩니다. 말줄임표 없이 모든 내용이 표현되며, 댓글 내용이 늘어남에 따라 댓글 박스도 같이 늘어납니다. 몇 십줄이 되어도 댓글 내용은 모두 보이도록 합니다.',
                    likeActive: false,
                    likeCount: 17,
                    replyCount: 4
                }
            ],
            commentText:''
        }
    }

    //하트 아이콘을 눌렀을 때
    likeOnpress = (key) => {
        const value = !this.state.comments[key].likeActive
        const likeCount = value ? this.state.comments[key].likeCount + 1 : this.state.comments[key].likeCount - 1
        this.setState({
            comments: update(
                this.state.comments, {
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
                    <Divider/>
                    {this.state.comments.map((item, index) => {
                        return (
                            <View>
                                <CommentListItem
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

                {/*하단 댓글 입력 시작*/}
                <View style={{width:'100%',flexDirection: 'row', position: 'absolute', bottom:15,left:15,right:15,paddingLeft:10,paddingRight:10,height:40,borderWidth:0.5,borderColor:'#bfbfbf',borderRadius: 10,alignItems:'center',justifyContent:'space-between' }}>
                    <TextInput
                        placeholder={'댓글을 입력하세요.'}
                        style={{justifyContent: 'center',fontSize:12,color:'#aaaaaa'}}
                        onChangeText={(text)=>this.setState({commentText:text})}>

                    </TextInput>
                    <Image style={{width:20,height:20,resizeMode:'contain'}}source={assets.commentIcon}/>
                </View>
            </View>
        )
    }
}

const CommentListItem = (props) => {
    return (
        <View style={styles.itemContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
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
            <Text style={styles.content}>{props.content}</Text>
            {/*댓글 내용 부분*/}
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 15}}>
                <TouchableOpacity onPress={props.likeOnPress}>
                    <Image style={styles.likeIcon} source={props.likeActive ? assets.activeLike : assets.unactiveLike}/>
                </TouchableOpacity>
                <Text style={styles.likeCount}>{props.likeCount}</Text>
                <Image style={styles.replyIcon} source={assets.replyIcon}/>
                <Text style={styles.replyCount}>{props.replyCount}</Text>
            </View>
        </View>
    )
}

const Divider = () => {
    return (
        <View style={{height: 1, backgroundColor: '#dedede'}}></View>
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
        marginRight: 3,
    },
    replyCount: {
        fontSize: 10,
        color: '#777777'
    }
})