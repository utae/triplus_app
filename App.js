import React from "react";

import {createAppContainer, createStackNavigator, createDrawerNavigator} from "react-navigation";

import MainPage from "./src/pages/MainPage/MainPage";
import SearchCityPage from "./src/pages/SearchCityPage/SearchCityPage";
import CityMainPage from "./src/pages/CityMainPage/CityMainPage";

import TopBarTitle from "./src/components/Header/TopBarTitle";
import DrawerButton from "./src/components/Header/DrawerButton";
import {theme} from './src/constants/ComponentTheme';
import Drawer from "./src/components/Drawer/Drawer";
import TripInfoPage from "./src/pages/TripInfoPage/TripInfoPage";
import TripPackagePage from "./src/pages/TripPackagePage/TripPackagePage";


const MainStack = createStackNavigator(
    {
        MainPage: {
            screen: MainPage
        },
        SearchCityPage: {
            screen: SearchCityPage
        },
        CityMainPage: {
            screen: CityMainPage
        },
        TripInfoPage: {
            screen: TripInfoPage
        },
        TripPackagePage: {
            screen: TripPackagePage
        },

    },{
        initialRouteName: 'MainPage',
        headerLayoutPreset: 'center',
        defaultNavigationOptions: (({navigation}) => {
            return {
                headerTitle: <TopBarTitle/>,
                headerRight: (
                    <DrawerButton
                        theme={theme.DARK}
                        onPress={navigation.openDrawer}
                    />
                )
            }
        }),
    }
);

const DrawerNavigator = createDrawerNavigator(
    {
        MainStack: {
            screen: MainStack
        }
    },{
        initialRouteName: 'MainStack',
        drawerPosition: 'right',
        contentComponent: Drawer,
    }
);

export default createAppContainer(DrawerNavigator);