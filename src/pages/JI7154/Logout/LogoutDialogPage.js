import React, {Component} from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity} from "react-native";
import Modal from 'react-native-modal'

type Props = {
    modalVisible: boolean
}

type State = {
    modalVisible:boolean
}

export default class LogoutDialogPage extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:this.props.modalVisible
        }
    }

    render() {
        return (
                <Modal
                    isVisible={this.state.modalVisible}
                    hasBackdrop={true}
                    backdropColor={'#4d4d4d'}
                    backdropOpacity={0.9}
                >
                    <View style={{
                        flex: 1,
                    }}>
                        {/*다이얼로그 시작*/}
                        <View style={styles.dialogContainer}>
                            {/*다이얼로그 상단 시작*/}
                            <Text style={styles.dialogTitle}>
                                {'로그아웃 하시겠습니까?'}
                            </Text>
                            {/*다이얼로그 상단 끝*/}
                            {/*Divider*/}
                            <View style={{height: 1, backgroundColor: '#bbbbbb'}}/>

                            {/*중단 안내문 시작*/}
                            <Text style={styles.dialogContent}>
                                {'로그아웃 시 예약 내역을 포함한 고객님의 모든 데이터는 확인할 수 없습니다. 해당 데이터 확인을 원할 시 다시 로그인해주세요.'
                                }
                            </Text>
                            {/*중단 안내문 끝*/}
                            {/*다이얼로그 하단 버튼 뷰 시작*/}
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                {/*취소 버튼*/}
                                <TouchableOpacity onPress={() => this.setState({modalVisible: false})}
                                                  style={styles.dialogCancelButton}>
                                    <Text style={{color: '#f20c49', fontSize: 12}}>{'취소'}</Text>
                                </TouchableOpacity>

                                {/*확인 버튼*/}
                                <TouchableOpacity onPress={() => {
                                    this.setState({modalVisible: false})
                                    alert('로그아웃 되었습니다.')
                                }
                                }
                                                  style={styles.dialogConfirmButton}>
                                    <Text style={{fontSize: 12, color: '#ffffff'}}>{'확인'}</Text>
                                </TouchableOpacity>
                            </View>
                            {/*    다이얼로그 하단 버튼 끝*/}

                        </View>
                    </View>
                </Modal>


        )
    }
}

const styles = StyleSheet.create({
    dialogContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 165,
        marginLeft:20,
        marginRight:20,
        backgroundColor: '#ffffff',
    },
    dialogTitle: {
        fontSize: 14, marginBottom: 22, fontWeight: 'bold'
    },
    dialogContent: {
        marginTop: 20, color: '#666666', fontSize: 12, marginBottom: 15
    },
    dialogCancelButton: {
        width: 45,
        height: 30,
        borderColor: '#f20c49',
        borderWidth: 0.5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    dialogConfirmButton: {
        width: 45,
        height: 30,
        backgroundColor: '#f20c49',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
})