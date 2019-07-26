import React,{Component} from 'react';
import {Image,Text,StyleSheet,View} from "react-native";
import CalendarPicker from './CalendarPicker'


export default class DatePickPage extends Component<Props>{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{'사용일자를 클릭하세요.'}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.nonReservableColor}/>
                        <Text style={styles.nonReservableText}>{'예약불가능'}</Text>
                    </View>
                </View>

                <CalendarPicker/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingLeft:15,
        paddingRight:15,
        paddingTop:30,
    },
    header:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        height:52,
        borderTopWidth:1,
        borderTopColor:'#dedede',
        borderBottomWidth:1.5,
        borderBottomColor:'#cccccc',
        marginBottom:20,
        paddingLeft: 15,
        paddingRight: 20
    },
    headerText: {
        fontSize:13,
        color:'#000000'
    },
    nonReservableColor:{
        width:15,
        height:15,
        borderRadius:2,
        backgroundColor:'#dddddd',
        marginRight:3
    },
    nonReservableText:{
        fontSize: 12,
        color:'#666666'
    }


})