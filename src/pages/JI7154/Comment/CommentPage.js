import React,{Component} from 'react';
import {Image,Text,StyleSheet,View,ScrollView} from "react-native";


type Props={

}

type State ={

}

export default class CommentPage extends Component<Props,State>{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <ScrollView>
                <Divider/>
            </ScrollView>
        )
    }
}

const CommentListItem = (props)=>{
    return(
        <View style={styles.itemContainer}>
            <View>
                <Image/>
                <View>
                    <Text></Text>
                    <Text></Text>
                </View>
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
    }
})