import React, { Component } from 'react';
import { HomePage } from './HomePage';
import { CustomerRecordsPage } from './CustomerRecordsPage';
import { MessageRecordsPage } from './MessageRecordsPage';
import { MyPage } from './MyPage';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    HomePage: { //
        screen: HomePage,
    },
    CustomerRecordsPage: { //
        screen: CustomerRecordsPage,
    },
    MessageRecordsPage: { //
        screen: MessageRecordsPage,
    },
    MyPage: { //
        screen: MyPage,
    },
}, {
        animationEnabled: false,
        initialRouteName: 'HomePage', // 默认显示界面
        mode: 'card', // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
        headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏

    });

export default App;