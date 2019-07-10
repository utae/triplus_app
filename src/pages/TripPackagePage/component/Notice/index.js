import React,{Component} from 'react';
import {Image,Text,StyleSheet,View} from "react-native";
import NoticeContent from "./NoticeContent";


export default class App extends Component<Props>{

    render(){
        return(
            <NoticeContent category={'알림 카테고리'} title={'이곳에는 게시물의 타이틀이 표시됩니다.'}/>
        )
    }
}

