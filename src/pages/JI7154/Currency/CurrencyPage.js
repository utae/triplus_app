import React,{Component} from 'react';
import {Image, Text, StyleSheet, View, SectionList, TouchableOpacity,Dimensions} from "react-native";
import * as assets from "../../../assets/image";

const {width, height} = Dimensions.get('window')
const screenWidth = width < height ? width : height

export default class CurrencyPage extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {
            selectedCurrency:{},
            recommendCurrencies:['미국 USD (＄)','유럽연합 EUR (€)','일본 JPY  (￥)'],
            otherCurrencies:[
            '중국 CHY (￥)','홍콩 HK ( HK＄)','대만 TWD (NT＄)','뉴질랜드 NZD ( NZ＄)',
            '이스라엘 ILS','말레이시아 MYR','베트남 VND ']
        }

    }

    _selected(item){
        this.setState({
            selectedCurrency: item
        })
    }

    render(){
        const selectCur = this.state.selectedCurrency
        return(
            <View style={styles.container}>
                <Divider/>
                <SectionList
                    sections={[
                        {title: '추천 통화',data:this.state.recommendCurrencies},
                    ]}
                    renderSectionHeader={({section})=>(
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    )}
                    renderItem={({item}) =>
                            <TouchableOpacity
                                style={styles.listItem}
                                onPress={()=>this._selected(item)}
                            >
                                < Text
                                    style={[styles.currencyText, item==selectCur ? {color: '#f20c49'} : {}]}>
                                    {item}
                                </Text>
                                {item==selectCur ? <Image source={assets.checkedIcon}/> : <Image source={assets.unCheckedIcon}/>}
                            </TouchableOpacity>
                    }
                    ItemSeparatorComponent={Divider}
                    keyExtractor={(item,index)=>index}
                />
                <SectionDivider/>
                <SectionList
                    sections={[
                        {title: '기타 통화',data:this.state.otherCurrencies},
                    ]}
                    renderSectionHeader={({section})=>(
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    )}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            style={styles.listItem}
                            onPress={()=>this._selected(item)}
                        >
                            < Text
                                style={[styles.currencyText, item==selectCur ? {color: '#f20c49'} : {}]}>
                                {item}
                            </Text>
                            {item==selectCur ? <Image source={assets.checkedIcon}/> : <Image source={assets.unCheckedIcon}/>}
                        </TouchableOpacity>
                    }
                    ItemSeparatorComponent={Divider}
                    keyExtractor={(item,index)=>index}/>
            </View>



        )
    }
}

const Divider = () => (
    <View style={{height: 1, backgroundColor: '#dedede'}}/>
)
const SectionDivider = () => (
    <View style={{width:screenWidth,height: 9.7, backgroundColor: '#f7f7f7'}}/>
)

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:30,
    },
    listItem: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        // borderBottomWidth:1,
        // borderBottomColor:'#dedede'
    },
    currencyText: {
        fontSize: 13,
        color: '#333333'
    },
    sectionHeader:{
        padding:15,
        fontWeight:'bold',
        fontSize: 13,
        color:'#000000',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1.5,
    }
})
