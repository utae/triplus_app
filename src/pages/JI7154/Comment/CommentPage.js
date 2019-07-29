import React,{Component} from 'react';
import {Image,Text,StyleSheet,View,ScrollView,TouchableOpacity} from "react-native";
import * as assets from 'Triplus_Components/assets/image'

type Props={

}

type State ={
    comments:{
        profileImage:Object,
        userName:string,
        date:string,
        content:string,
        likeCount:number,
        replyCount:number,
    }
}

export default class CommentPage extends Component<Props,State>{
    constructor(props){
        super(props);
        this.state={
            comments:[
                {profileImage:assets.profileImgList[0],userName:'Username',date:'2019년 5월 31일',content:'댓글 내용이 이곳에 표현됩니다. 말줄임표 없이 모든 내용이 표현되며, 댓글 내용이 늘어남에 따라 댓글 박스도 같이 늘어납니다. 몇 십줄이 되어도 댓글 내용은 모두 보이도록 합니다.',likeCount: 17,replyCount: 4},
                {profileImage:assets.profileImgList[1],userName:'myname',date:'2019년 5월 31일',content:'댓글 내용이 이곳에 표현됩니다. 말줄임표 없이 모든 내용이 표현되며, 댓글 내용이 늘어남에 따라 댓글 박스도 같이 늘어납니다. 몇 십줄이 되어도 댓글 내용은 모두 보이도록 합니다.',likeCount: 17,replyCount: 4}
                ]
        }
    }

    likeOnpress(){
        this.setState({

        })
    }

    render(){
        return(
            <ScrollView>
                <Divider/>
                {this.state.comments.map((item,index)=>{
                    return(
                    <CommentListItem
                        key={index}
                        profileImage={item.profileImage}
                        userName={item.userName}
                        date={item.date}
                        content={item.content}
                        likeCount={item.likeCount}
                        replyCount={item.replyCount}
                    />
                    )
                })}
            </ScrollView>
        )
    }
}

const CommentListItem = (props)=>{
    return(
        <View style={styles.itemContainer}>
            <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                <Image style={styles.profileImage} source={props.profileImage}/>
                <View>
                    <Text style={styles.userName}>{props.userName}</Text>
                    <Text style={styles.date}>{props.date}</Text>
                </View>
                <TouchableOpacity style={styles.moreButton}>
                    <Image  source={assets.moreIcon}/>
                </TouchableOpacity>
            </View>
            {/*상단 부분*/}
            <Text style={styles.content}>{props.content}</Text>
            {/*댓글 내용 부분*/}
            <View style={{flexDirection:'row',justifyContent:'flex-end',marginBottom:15}}>
                <TouchableOpacity onPress={props.likeOnPress}>
                    <Image style={styles.likeIcon} source={assets.unactiveLike}/>
                </TouchableOpacity>
                <Text style={styles.likeCount}>{props.likeCount}</Text>
                <Image style={styles.replyIcon} source={assets.replyIcon}/>
                <Text style={styles.replyCount}>{props.replyCount}</Text>
            </View>
        </View>
    )
}

const Divider = ()=>{
    return(
        <View style={{height:1,backgroundColor:'#dedede'}}></View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingRight:15,
        paddingLeft:15,
        paddingTop:30,
    },
    itemContainer:{
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop:10,
    },
    profileImage:{
        width:40,
        height: 40,
        borderRadius:20,
        marginRight:10,
        resizeMode: 'cover'
    },
    userName:{
        fontSize:12,
        color:'#555555'
    },
    date:{
        fontSize: 10,
        color: '#888888'
    },
    moreButton:{
        width: 40,
        height:40,
        alignItems: 'center',
        justifyContent:'center',
        marginLeft:'auto',
    },
    content:{
        flex:1,
        fontSize:12,
        color:'#777777'
    },
    likeIcon:{
        height:15,
        width:15,
        resizeMode: 'contain',
        marginRight:5
    },
    likeCount:{
        fontSize:10,
        color:'#777777',
        marginRight: 10,
    },
    replyIcon:{
        width:15,
        height:15,
        resizeMode :'contain',
        marginRight:3,
    },
    replyCount:{
        fontSize:10,
        color:'#777777'
    }
})