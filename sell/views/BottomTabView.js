/* 

*/
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

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const scale = ScreenWidth / 375;

const cusIcon = require('./img/bottom-menu-cus.png');//客户
const curCusIcon = require('./img/bottom-menu-cus-cur.png');
const homeIcon = require('./img/bottom-menu-home.png');//首页
const curHomeIcon = require('./img/bottom-menu-home-cur.png');
const msgIcon = require('./img/bottom-menu-msg.png');//消息
const curMsgIcon = require('./img/bottom-menu-msg-cur.png');
const myIcon = require('./img/bottom-menu-my.png');//我
const curMyIcon = require('./img/bottom-menu-my-cur.png');

const menuData = [, {
	menuId: 'home',
	menuText: '首页',
	source: homeIcon,
	curSource: curHomeIcon,
	routeName: 'HomePage',
}, {
		menuId: 'cus',
		menuText: '客户',
		source: cusIcon,
		curSource: curCusIcon,
		routeName: 'CustomerRecordsPage',
	}, {
		menuId: 'msg',
		menuText: '消息',
		source: msgIcon,
		curSource: curMsgIcon,
		routeName: 'MessageRecordsPage',
	}, {
		menuId: 'my',
		menuText: '我',
		source: myIcon,
		curSource: curMyIcon,
		routeName: 'MyPage',
	}];

export default class BottomTabView extends Component {

	constructor(props) {
		super(props);
		this.state = {};

		// 当前选择的菜单
		this.curMenuId = this.props.curMenuId ? this.props.curMenuId : 'home';
	}

	componentWillMount() {
	}

	componentWillUnmount() {
	}

	/**
	 * 
	 * @param {string} routeName 
	 */
	_didPressMenu(routeName) {
		const { navigate, state } = this.props.navigation;
	}
	render() {

		/* 基于menuData生成菜单的views */
		const menuViews = menuData.map(item => {
			const source = (item.menuId == this.curMenuId) ? item.curSource : item.source;
			return (
				<TouchableOpacity style={styles.menuView} key={item.menuId} activeOpacity={0.5}
					onPress={() => { this.props.didPressRoute(item.routeName) }}>
					<Image source={source} style={styles.menuPic} />
					<Text style={[styles.menuText, (item.menuId == this.curMenuId) ? styles.menuCurText : null]}>{item.menuText}</Text>
				</TouchableOpacity >
			);
		});

		return (
			<View style={styles.bottomTabView}>
				{menuViews}
			</View>
		);
	}
}

// export function _didPressRoute(routeName){
// 	const { navigate, state } = this.props.navigation;
// }

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	bottomTabView: {
		flexDirection: 'row',
		height: 50 * scale,
		backgroundColor: '#fff',
		borderTopWidth: 1,
		borderStyle: 'solid',
		borderTopColor: '#F3F3F3',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	menuView: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	menuText: {
		color: '#4B4B4B',
		fontSize: 10 * scale,
	},
	menuPic: {
		height: 25 * scale,
		width: 25 * scale,
		marginBottom: 3 * scale,
	},
	menuCurText: {
		color: '#4DA9EC',
	}
});

