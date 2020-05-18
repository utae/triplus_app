import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    TextInput
} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';

import {
    portraitSampleBanner01, portraitSampleBanner02,
    packageImgList, reviewThumbnailList, profileImgList,
} from 'image/Sample'
import {
    location, like, review, share, address, phone, starOff, starOn,
    reviewWrite,
} from 'image/TripPackage'
import HorizontalList from "../../components/List/HorizontalList";
import PortraitBanner from "../../components/List/PortraitBanner";
import {theme} from "../../constants/ComponentTheme";
import BackButton from "../../components/Header/BackButton";

const images = packageImgList;
const photos = reviewThumbnailList;

const {width, height} = Dimensions.get('window');


type Props = {};
export default class App extends Component<Props> {

    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <BackButton
                    theme={theme.DARK}/>
            )
        };
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                {/*네비게이션바*/}

                <ScrollView style={styles.scrollView}>
                    {/*이미지*/}
                    <IndicatorViewPager
                        style={{width: '100%', height: 200, marginBottom: 20}}
                        indicator={this._renderDotIndicator()}
                    >
                        {this.renderImages()}
                    </IndicatorViewPager>
                    {/*상품프리뷰*/}
                    <View>
                        <View style={{flexDirection: 'row', height: 22}}>
                            <Image source={location}/>
                            <Text>충남,아산</Text>
                        </View>
                        <Text style={{fontSize: 23, color: '#000000', marginTop: 4, marginBottom: 3}}>충남 아산 '지중해 마을
                            투어'</Text>
                        <Text style={{fontSize: 14, color: '#333333', marginBottom: 12}}>한국에 온 그리스.스위스 ... 주말 난 미니유럽
                            간다</Text>
                        <Text style={{fontSize: 20, color: '#f20c49', marginBottom: 27}}>₩ 75,000</Text>
                        {/*버튼들*/}
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 14}}>
                            <TouchableOpacity style={styles.buttons}>
                                <Image source={like}/>
                                <Text style={{fontSize: 13}}>좋아요</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons}>
                                <Image source={review}/>
                                <Text style={{fontSize: 13}}>리뷰보기</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons}>
                                <Image source={share}/>
                                <Text style={{fontSize: 13}}>공유하기</Text>
                            </TouchableOpacity>
                        </View>
                        {/*구분선*/}
                        <View style={{borderColor: '#dedede', borderWidth: 1, marginBottom: 41}}/>

                    </View>
                    {/*상품상세페이지*/}
                    <View style={{marginBottom: 40}}>
                        <Text style={{fontSize: 12, color: '#f20c49'}}>알림 카테고리</Text>
                        <Text style={{fontSize: 16, color: '#000000', marginBottom: 39}}>이곳에는 게시물의 타이틀이 표시됩니다.</Text>
                        <Text style={{color: '#333333', width: 310,}}>
                            {'이곳에는 게시물의 본문이 나타납니다.\n' +
                            '게시글 작성에 따라 다음과 같이 강조되어 나타날 수\n' +
                            '있습니다.\n\n'}
                        </Text>
                        <Text style={{color: '#f20c49', width: 310}}>
                            {'강조문은 이렇게 표현됩니다.\n\n'}
                        </Text>
                        <Text style={{color: '#333333', width: 310}}>{
                            '나머지 내용은 이렇게 이어지고 있습니다.\n' +
                            '상황에 따라 중간에 이미지가 들어갈 수도 있습니다.\n\n'
                        }</Text>
                        <Text style={{color: '#333333', width: 310,lineHeight:25}}>
                            {'혹시나 상단의 이미지를 사용하지 않는 경우에는,\n' +
                            '저 공간의 90px만큼의 간격을 둔 후에 내용을 표시하시면 됩니다.'}
                        </Text>
                    </View>
                    {/*구분선*/}
                    <View style={{
                        borderWidth: 1,
                        backgroundColor: '#f7f7f7',
                        height: 8,
                        borderColor: '#f7f7f7',
                        marginBottom: 43
                    }}/>
                    {/*지도 부분*/}
                    {/*지도 정보*/}
                    <View style={styles.mapInfo}>
                        {/*주소정보*/}
                        <View style={{flexDirection: 'row'}}>
                            <Image source={address}/>
                            <Text style={{fontSize:13,marginLeft: 10}}>충남 아산시 탕정면 탕정면로8번길 55-7</Text>
                        </View>
                        {/*연락처정보*/}
                        <View style={{flexDirection: 'row',}}>
                            <Image source={phone}/>
                            <Text style={{fontSize:13,marginLeft: 10}}>041-532-9889</Text>
                        </View>
                    </View>
                    {/*지도API*/}
                    <View style={{height: 150, borderWidth: 1, marginBottom: 45}}>
                        <Text>지도 API</Text>
                    </View>
                    {/*구분선*/}
                    <View style={{
                        borderWidth: 1,
                        backgroundColor: '#f7f7f7',
                        height: 8,
                        borderColor: '#f7f7f7',
                        marginBottom: 43
                    }}/>
                    {/*리뷰화면*/}
                    <View>
                        {/*리뷰화면 상단*/}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 22
                        }}>
                            <View>
                                <Text style={{fontSize: 18, color: '#000000', marginBottom: 8}}>리뷰 135</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <Image source={starOn}/>
                                    <Image source={starOn}/>
                                    <Image source={starOn}/>
                                    <Image source={starOn}/>
                                    <Image source={starOff}/>
                                    <Text style={{fontSize: 12, color: '#000000', marginLeft: 9}}>4.0 </Text>
                                    <Text style={{fontSize: 12, color: '#999999'}}>| 5.0</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{
                                borderColor: '#dedede',
                                borderRadius: 8,
                                borderWidth: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                height: 30
                            }}>
                                <Image source={reviewWrite}/>
                                <Text style={{fontSize: 13, color: '#666666'}}>리뷰쓰기</Text>
                            </TouchableOpacity>
                        </View>
                        {/*포토리뷰*/}
                        <View style={{borderBottomWidth: 1, borderBottomColor: '#dedede', marginBottom: 20}}>
                            <ScrollView
                                horizontal={true}
                                style={{marginBottom: 8}}>
                                {this._renderPhotoReview()}
                            </ScrollView>
                            <TouchableOpacity style={{marginBottom: 18}}>
                                <Text>포토리뷰 모아보기 ></Text>
                            </TouchableOpacity>
                        </View>
                        {/*리뷰내용*/}
                        <View>
                            {/*리뷰1*/}
                            <View style={{borderBottomWidth: 1, borderBottomColor: '#dedede', marginBottom: 20}}>
                                {/*리뷰내용헤더*/}
                                <View style={{flexDirection: 'row', marginBottom: 16}}>
                                    <Image source={profileImgList[0]}
                                           style={{
                                               width: 40,
                                               height: 40,
                                               borderRadius: 40,
                                               flex: 1,
                                               marginRight: 10
                                           }}/>
                                    <View style={{flex: 5}}>
                                        <Text style={{fontSize: 14}}>박보검</Text>
                                        <Text style={{fontSize: 10, color: '#888888'}}>2019년 7월 3일</Text>
                                    </View>
                                    <Image source={starOn}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                    <Image source={starOn}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                    <Image source={starOn}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                    <Image source={starOn}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                    <Image source={starOff}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                </View>
                                {/*게시물의 상품리뷰*/}
                                <View>
                                    <TextInput
                                        multiline={true}
                                        numberOfLines={2}
                                        editable={false}
                                        selectTextOnFocus={false}
                                        style={{fontSize: 13, width: '100%'}}>이곳에는 게시물의 상품리뷰 {'\n'} 게시글 작성에 따라 다음과 같이
                                        나타날 수 있습니다.</TextInput>
                                </View>
                                <ScrollView
                                    horizontal={true}
                                    style={{marginBottom: 19}}>
                                    {this._renderReViewImages()}
                                </ScrollView>
                            </View>
                            {/*리뷰2*/}
                            <View style={{borderBottomWidth: 1, borderBottomColor: '#dedede', marginBottom: 20}}>
                                {/*리뷰내용헤더*/}
                                <View style={{flexDirection: 'row', marginBottom: 16}}>
                                    <Image source={profileImgList[1]}
                                           style={{
                                               width: 40,
                                               height: 40,
                                               borderRadius: 40,
                                               flex: 1,
                                               marginRight: 10
                                           }}/>
                                    <View style={{flex: 5}}>
                                        <Text style={{fontSize: 14}}>아이유</Text>
                                        <Text style={{fontSize: 10, color: '#888888'}}>2019년 6월 31일</Text>
                                    </View>
                                    <Image source={starOn}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                    <Image source={starOn}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                    <Image source={starOn}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                    <Image source={starOn}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                    <Image source={starOff}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                </View>
                                {/*게시물의 상품리뷰*/}
                                <View>
                                    <TextInput
                                        multiline={true}
                                        numberOfLines={2}
                                        editable={false}
                                        selectTextOnFocus={false}
                                        style={{fontSize: 13, width: '100%'}}>이곳에는 게시물의 상품리뷰 {'\n'} 게시글 작성에 따라 다음과 같이
                                        나타날 수 있습니다.</TextInput>
                                </View>
                            </View>
                            {/*리뷰3*/}
                            <View style={{borderBottomWidth: 1, borderBottomColor: '#dedede', marginBottom: 20}}>
                                {/*리뷰내용헤더*/}
                                <View style={{flexDirection: 'row', marginBottom: 16}}>
                                    <Image source={profileImgList[2]}
                                           style={{
                                               width: 40,
                                               height: 40,
                                               borderRadius: 40,
                                               flex: 1,
                                               marginRight: 10
                                           }}/>
                                    <View style={{flex: 5}}>
                                        <Text style={{fontSize: 14}}>태연</Text>
                                        <Text style={{fontSize: 10, color: '#888888'}}>2019년 5월 31일</Text>
                                    </View>
                                    <Image source={starOn}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                    <Image source={starOn}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                    <Image source={starOn}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                    <Image source={starOn}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                    <Image source={starOff}
                                           style={{flex: 0.4, resizeMode: 'contain'}}/>
                                </View>
                                {/*게시물의 상품리뷰*/}
                                <View>
                                    <TextInput
                                        multiline={true}
                                        numberOfLines={2}
                                        editable={false}
                                        selectTextOnFocus={false}
                                        style={{fontSize: 13, width: '100%'}}>이곳에는 게시물의 상품리뷰 {'\n'} 게시글 작성에 따라 다음과 같이
                                        나타날 수 있습니다.</TextInput>
                                </View>
                            </View>
                            {/*리뷰내용끝*/}
                        </View>
                        <TouchableOpacity style={styles.moreReviewButton}>
                            <Text style={{fontSize: 13, color: '#666666'}}>리뷰더보기</Text>
                        </TouchableOpacity>
                        {/*리뷰화면끝*/}
                    </View>
                    {/*구분선*/}
                    <View style={{
                        borderWidth: 1,
                        backgroundColor: '#f7f7f7',
                        height: 8,
                        borderColor: '#f7f7f7',
                        marginBottom: 43
                    }}/>
                    {/*추천상품*/}
                    <View>
                        <Text style={{fontSize:16,marginBottom:20}}>이 여행과 관련된 추천상품</Text>
                        <View style={{flexDirection: 'row'}}>
                            <HorizontalList
                                data={[{source: portraitSampleBanner01, title: "강원도", subtitle: "22만원부터"}, {source: portraitSampleBanner02, title: "제주도", subtitle: "22만원부터"},{source: portraitSampleBanner01, title: "강원도", subtitle: "22만원부터"}, {source: portraitSampleBanner02, title: "제주도", subtitle: "22만원부터"}]}
                                renderItem={({item}) => (
                                    <PortraitBanner
                                        source={item.source}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                    />
                                )}
                            />
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#f7f7f7',height:80}}>
                            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center',height:45}}>
                                <Text style={{fontSize:10,color:'#999999'}}>TRIPLUS 할인가</Text>
                                <Text style={{fontSize:16,color:'#5963bc'}}>₩ 75,000</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:2,justifyContent:'center',alignItems:'center',backgroundColor:'#f20c49',height:45}}>
                                <Text style={{fontSize:16,color:'#ffffff'}}>예약하기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={images.length}/>;
    }

    _renderPhotoReview() {
        let photoList = [];
        for (let j = 0; j < reviewThumbnailList.length; j++) {
            photoList.push(
                <View style={{width: 70, height: 70, marginRight: 10}}>
                    <Image source={reviewThumbnailList[j]} style={{width: '100%', height: '100%', borderRadius: 10}}/>
                </View>
            )
        }
        console.log(photoList);
        return photoList
    }

    _renderReViewImages() {
        let imgList = [];
        for (let i = 0; i < images.length; i++) {
            imgList.push(
                <View style={{width: width, height: 150, marginRight: 10}}>
                    <Image source={images[i]} style={{width: '100%', height: '100%', borderRadius: 10}}/>
                </View>
            )

        }
        return imgList
    }
    _renderRecommendImages(){
        return <View>
            <Text style={{width:width/2,height:190,marginBottom:10,alignItems:'center'}}>추천상품 이미지</Text>
            <Text style={{width:width/2}}>22만원 부터</Text>
        </View>
    }

    renderImages() {
        let imgList = [];
        for (let i = 0; i < packageImgList.length; i++) {
            imgList.push(
                <View>
                    <Image source={packageImgList[i]} style={{width: '100%', height: '100%', borderRadius: 10}}/>
                </View>
            )

        }
        return imgList
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        width: '100%',
        marginBottom: 4,
        paddingLeft: 15,
        paddingRight: 15,
    },
    navBar: {
        flexDirection: 'row',
        height: 50,
        width: '100%',
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderBottomColor: '#19000000',
        borderBottomWidth: 1,
    },

    buttons: {
        borderWidth: 1,
        borderRadius: 8,
        width: 100,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapInfo: {
        borderColor: '#dedede',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        padding: 14
    },
    moreReviewButton: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#dedede',
        borderWidth:1,
        borderRadius: 8,
        marginBottom : 45,
    }
});
