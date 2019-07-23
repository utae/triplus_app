import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity, Dimensions} from "react-native";
import * as assets from 'Triplus_Components/assets/image'
import update from 'react-addons-update'

const {width, height} = Dimensions.get('window')
const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

export default class OptionPickPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                {title: '충남 아산 \'지중해 마을 투어\'', price: 75000, count: 0},
                {title: '충남 아산 \'지중해 마을 투어\'', price: 75000, count: 0}
            ],
            totalPrice: 0

        }
    }


    _formattingPrice(num) {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    }

    _subtractCount(index) {
        if (this.state.options[index].count > 0) {
            let value = this.state.options[index].count - 1
            this.setState({
                options: update(
                    this.state.options, {
                        [index]: {
                            count: {$set: value}
                        }
                    }
                ),
                totalPrice: this.state.totalPrice - this.state.options[index].price

            })

        }
    }

    _plusCount(index) {
        let value = this.state.options[index].count + 1
        this.setState({
            options: update(
                this.state.options, {
                    [index]: {
                        count: {$set: value}
                    }
                }
            ),
            totalPrice: this.state.totalPrice + this.state.options[index].price
        })

    }

    _renderOption() {
        return (
            this.state.options.map((options, index) => {
                    return (
                        <View style={styles.listItem} key={index}>
                            <View>
                                <Text style={styles.optionTitle}>{options.title}</Text>
                                <Text
                                    style={styles.optionPrice}>{'KRW ' + this._formattingPrice(options.price) + '원'}</Text>
                            </View>
                            <View style={styles.countOptionView}>
                                <TouchableOpacity
                                    style={{alignItems: 'center', justifyContent: 'center'}}
                                    onPress={() => this._subtractCount(index)}
                                    disabled={options.count == 0 ? true : false}>
                                    <Image style={styles.operator}
                                           source={options.count > 0 ? assets.activeMinusIcon : assets.unactiveMinusIcon}/>
                                </TouchableOpacity>
                                <View style={{height: 18, width: 1, backgroundColor: '#cccccc'}}/>
                                <Text>{options.count}</Text>
                                <View style={{height: 18, width: 1, backgroundColor: '#cccccc'}}/>
                                <TouchableOpacity
                                    style={{alignItems: 'center', justifyContent: 'center'}}
                                    onPress={() => this._plusCount(index)}>
                                    <Image source={assets.activePlusIcon}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
            )
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.dateSelectText}>{'날짜선택'}</Text>
                <View style={{flexDirection: 'row', marginBottom: 28}}>
                    <View style={styles.imageView}>
                        <Image style={styles.calendarIcon} source={assets.calendarIcon}/>
                    </View>
                    <View style={styles.dateView}>
                        <Text style={styles.selectedDate}>{this.props.selectedDate}</Text>
                    </View>
                </View>
                <Text style={styles.optionPickText}>{'예약 옵션 선택'}</Text>
                {this._renderOption()}
                <View style={styles.payView}>
                    <View style={styles.priceView}>
                        <Text style={styles.totalText}>{'TOTAL'}</Text>
                        <Text style={styles.totalPrice}>{'￦ ' + this._formattingPrice(this.state.totalPrice)}</Text>
                    </View>
                    <TouchableOpacity style={styles.payButton}>
                        <Text style={styles.payText}>{'결재하기'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 45,
    },
    dateSelectText: {
        fontSize: 10,
        color: '#999999',
        marginBottom: 8
    },
    imageView: {
        width: 40,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    calendarIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },
    dateView: {
        flex: 1,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    selectedDate: {
        fontSize: 14,
        color: '#000000'
    },
    optionPickText: {
        fontSize: 10,
        color: '#999999',
        marginBottom: 8.
    },
    listItem: {
        height: 70,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
    },
    optionTitle: {
        fontSize: 14,
        color: '#000000'
    },
    optionPrice: {
        fontSize: 12,
        color: '#666666'
    },
    countOptionView: {
        width: 80,
        height: 30,
        borderWidth: 1,
        borderColor: '#dedede',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 9,
        paddingRight: 9
    },
    operator: {
        width: 10,
        height: 10,
        resizeMode: 'contain'
    },
    payView: {
        backgroundColor: '#ffffff',
        position:'absolute',
        width:screenWidth,
        bottom:0,
        height: 80,
        paddingRight: 15,
        paddingLeft: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    totalText: {
        fontSize: 10,
        color: '#999999'
    },
    totalPrice: {
        fontSize: 16,
        color: '#5963bc'
    },
    payButton: {
        flex: 2.2,
        height: 45,
        backgroundColor: '#f20c49',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    payText: {
        color: '#ffffff',
        fontSize: 16,
    }


})