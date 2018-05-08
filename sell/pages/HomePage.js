import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
} from "react-native";

import BottomTabView from '../views/BottomTabView';

const tipIcon = require('./img/snippets.png');
const msgPic = require('./img/msg-pic.png');

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var scale = ScreenWidth / 375;

export class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        title: '首页',
        color: 'blue',
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.menuCell}>

                    <View style={styles.menuItem}>
                        <Image source={tipIcon} style={styles.menuItemImg} />
                        <Text style={styles.menuItemText}>财务报表</Text>
                    </View>

                    <View style={styles.menuItem}>
                        <Image source={tipIcon} style={styles.menuItemImg} />
                        <Text style={styles.menuItemText}>财务报表</Text>
                    </View>

                    <View style={styles.menuItem}>
                        <Image source={tipIcon} style={styles.menuItemImg} />
                        <Text style={styles.menuItemText}>财务报表</Text>
                    </View>

                    <View style={styles.menuItem}>
                        <Image source={tipIcon} style={styles.menuItemImg} />
                        <Text style={styles.menuItemText}>财务报表</Text>
                    </View>

                    <View style={styles.menuItem}>
                        <Image source={tipIcon} style={styles.menuItemImg} />
                        <Text style={styles.menuItemText}>财务报表</Text>
                    </View>

                    <View style={styles.menuItem}>
                        <Image source={tipIcon} style={styles.menuItemImg} />
                        <Text style={styles.menuItemText}>财务报表</Text>
                    </View>

                    <View style={styles.menuItem}>
                        <Image source={tipIcon} style={styles.menuItemImg} />
                        <Text style={styles.menuItemText}>财务报表</Text>
                    </View>

                    <View style={styles.menuItem}>
                        <Image source={tipIcon} style={styles.menuItemImg} />
                        <Text style={styles.menuItemText}>财务报表</Text>
                    </View>

                </View>

                <View style={styles.grayView}></View>

                <View style={styles.msgCell}>
                    <Text style={styles.msgText}>快报资讯</Text>
                    <Image source={msgPic} style={styles.msgPic} />
                </View>

                <BottomTabView didPressRoute={routeName => this._didPressRoute(routeName)} />
            </View>
        );
    }

    _didPressRoute(routeName) {
        const { navigate, state } = this.props.navigation;
        if (routeName) {
            navigate(routeName, {
            })
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    menuCell: {
        height: 200 * scale,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        flexWrap: 'wrap',
        paddingTop: 10 * scale,
        paddingLeft: 12 * scale,
        paddingRight: 12 * scale,
    },
    menuItem: {
        paddingTop: 17 * scale,
        width: '25%',
        alignItems: 'center',
    },
    menuItemImg: {
        height: 45 * scale,
        width: 45 * scale,
        marginBottom: 8 * scale,
    },
    menuItemText: {
        fontSize: 12 * scale,
        color: '#4B4B4B'
    },
    grayView: {
        height: 12 * scale,
        backgroundColor: '#F3F3F3',
    },
    msgCell: {
        paddingTop: 16 * scale,
        paddingBottom: 30 * scale,
        backgroundColor: '#fff',
    },
    msgPic: {
        width: 375 * scale,
        height: 105 * scale,
    },
    msgText: {
        marginBottom: 13 * scale,
        fontSize: 14 * scale,
        paddingLeft: 16 * scale,
        color: '#4B4B4B'
    }
});