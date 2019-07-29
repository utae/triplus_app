import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Dimensions,
    Image,
} from 'react-native';
import moment from 'moment'
import * as assets from 'Triplus_Components/assets/image'

const {width, height} = Dimensions.get('window')
const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

type Props={
    current:Object
    selectDay:string
}

export default class CalendarPicker extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            current: moment(), //최초진입시 당시 시간 저장
            selectDay: {} // 선택한 날짜 YYYYMMDD 형식으로 저장
        }
    }

    preMonth() {
        this.setState({current: this.state.current.subtract(1, 'months')})
    }

    nextMonth() {
        this.setState({current: this.state.current.add(1, 'months')})
    }

    selectDay(item) {// 선택된 날짜 정보를 state에 저장
        this.setState({selectDay: this.state.selectDay = item.format('YYYYMMDD')})
    }

    selectComplete() { // 날짜 선택 후 선택하기 버튼을 눌렀을 때
        console.log(this.state.selectDay)
    }

    selectBackgroundColor(item) { //선택된 날짜의 배경색 변경
        const now = moment()//오늘 날짜
        if (now.isAfter(item) && item.format('YYYYMMDD') != now.format('YYYYMMDD')) // 오늘 이전의 날짜
            return {backgroundColor: '#DDD'}
        else if (item.format('YYYYMMDD') == this.state.selectDay)
            return {backgroundColor: '#F20C49'}
        else {
            return null;
        }
    }

    selectFontColor(item) { // 선택된 날짜의 폰트변경
        if (item.format('YYYYMMDD') == this.state.selectDay) // 날짜가 선택되면
            return {color: 'white'}
        else {
            return null;
        }
    }
    renderHeader(){ // 달력의 헤더부분
        return (
            <View style={styles.calendarHeader}>
                <TouchableOpacity onPress={() => this.preMonth()}>
                    <Image style={{width:15,height:15,resizeMode: 'contain'}}
                    source={assets.preMonthArrow}/></TouchableOpacity>
                <Text style={styles.calendarHeaderText}>{this.state.current.format('YYYY년 M월')}</Text>
                <TouchableOpacity onPress={() => this.nextMonth()}>
                    <Image style={{width:15,height:15,resizeMode: 'contain'}}
                    source={assets.nextMonthArrow}/></TouchableOpacity>
            </View>
        )
    }

    renderWeekDay() { // 요일 출력
        const weekdays = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];
        return (
            weekdays.map(function (weekdays,index) {
                    return(
                        <View style={styles.weekdayCell} key={index}>
                            <Text style={styles.weekdayText}>{weekdays}</Text>
                        </View>
                        )


                }
            )
        )
    }

    renderDay(item) { // 해당 월에 맞게 날짜 출력

        const nowYear = this.state.current.year()
        const nowMonth = this.state.current.month()
        const now = moment()//오늘 날짜
        if (item.year() == nowYear && item.month() == nowMonth) {//이번달에 존재하는 날만 출력
            return (
                <TouchableOpacity
                    style={[styles.dayCell, this.selectBackgroundColor(item)]}
                    onPress={() => this.selectDay(item)}
                    disabled={now.isAfter(item) && item.format('YYYYMMDD') != now.format('YYYYMMDD') ? true : false}
                >
                    <Text style={[styles.dayText, this.selectFontColor(item)]}>{item.date()}</Text>
                </TouchableOpacity>
            )

        } else // 이번달에 존재하는 날이 아니면 공간만 차지
            return <View style={styles.dayCell}/>
    }
    renderButton(){ // 선택하기 버튼
        return(
            <TouchableOpacity
                style={styles.selectButton}
                onPress={() => this.selectComplete()}
            >
                <Text style={styles.selectButtonText}>선택하기</Text>
            </TouchableOpacity>
        )
    }


    render() {
        const now = this.state.current
        let dates = []
        for (let i = 0; i < 42; i++) {
            let startMonth = moment(now).date(1)
            dates[i] = startMonth.weekday(i)
        }
        return (
            <View style={styles.container}>
                <View style={styles.calendar}>
                    {this.renderHeader()}
                    <View style={styles.weekday}>
                        {this.renderWeekDay()}
                    </View>
                        <FlatList
                            data={dates}
                            renderItem={({item}) => this.renderDay(item)}
                            numColumns={7}
                            keyExtractor={(item) => item}
                        />
                </View>
                {this.renderButton()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    calendar: {
        height:335,
        paddingTop:14,
        paddingLeft:18.5,
        paddingRight:18.5,
        paddingBottom:21.5,
        backgroundColor: '#FCFCFC',
        borderColor: '#EDEDED',
        borderWidth: 1,
        borderRadius: 15,
        elevation: 4,
        marginBottom:20,
    },

    calendarHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:10.5,
        paddingRight:10.5,
        marginBottom: 20,
    },
    calendarHeaderText: {
        alignItems: 'center',
        fontSize: 16,
        color: '#000000'
    },
    weekday: {
        flexDirection: 'row',
        paddingLeft:3.5,
        paddingRight:3.5,
        marginBottom:3.5
    },
    weekdayCell:{
        flex:1,
        height:30,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    weekdayText: {
        fontSize: 13,
        color: '#999999'
    },
    dayCell: {
        flex: 1,
        height:30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 3.5,
    },
    dayText: {
        fontSize: 13,
        color:'#000000'
    },
    selectButton: {
        height:45,
        borderColor: '#F20C49',
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectButtonText: {
        fontSize: 16,
        color: '#F20C49',
        fontWeight: "500"
    }
});
