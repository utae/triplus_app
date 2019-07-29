import React, {Component} from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import TripInfoItem from "./TripInfoItem";
import TripPackageItem from "./TripPackageItem";

class MixedList extends Component{

    _renderItem = ({item, index}) => {
        if(item.hasOwnProperty('price')){
            return (
                <TripPackageItem
                    source={{uri: item.main_img}}
                    title={item.title}
                    price={item.price}
                    isLeft={index % 2 === 0}
                    onPress={()=>{
                            this.props.navigation.navigate("TripPackagePage",{
                                tripPackage: item,
                            })
                        }
                    }
                />
            );
        }else{
            return (
                <TripInfoItem
                    source={{uri: item.main_img}}
                    title={item.title}
                    isLeft={index % 2 === 0}
                    onPress={()=>{
                            this.props.navigation.navigate("TripInfoPage",{
                                tripInfo: item,
                            })
                        }
                    }
                />
            );
        }
    };

    render() {
        return (
            <FlatList
                style={{marginBottom: 30}}
                columnWrapperStyle={{}}
                data={this.props.data}
                renderItem={this._renderItem}
                numColumns={2}
                keyExtractor={(item, index) => index}
                onScroll={this.props.onScroll}
                ListHeaderComponent={this.props.header}
            />
        );
    }
}

export default withNavigation(MixedList);