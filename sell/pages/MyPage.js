import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import BottomTabView from '../views/BottomTabView';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
const scale = ScreenWidth / 375;

const pic = require('../../img/snippets.png');

export class MyPage extends Component {

	constructor(props) {
		super(props);
		this.state = {};

	}

	render() {
		return (
			<View style={styles.container}>

				<View style={styles.topInfo}>
					<Image source={pic} style={styles.mask} />
					<Text style={styles.userName}>姓名</Text>
					<View style={styles.roleCell}>
						<Text style={styles.officeText}>聚烯烃部</Text>
						<Text style={styles.role}>采购</Text>
						<Text style={styles.role}>采购</Text>
					</View>
				</View>

				<View style={styles.menuItem}>
					<View style={styles.menuItemLeft}>
						<Image source={pic} style={styles.menuItemPic} />
					</View>
					<View style={styles.menuItemRight}>
						<Text style={styles.menuText}>我的业绩</Text>
						<Text style={styles.menuExplain}>请选择合同类型</Text>
					</View>
				</View>

				<BottomTabView curMenuId={'my'} didPressRoute={routeName => this._didPressRoute(routeName)} />


			</View>
		);
	}

	/**
 * BottomTabView组件通信
 * @param {string} routeName 
 */
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
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#fff',
	},
	topInfo: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 200,
		backgroundColor: '#9BD6FF',
		marginBottom: 15
	},
	mask: {
		width: 53,
		height: 53,
		borderRadius: 20
	},
	userName: {
		fontSize: 18,
		color: '#404040',
		marginTop: 8,
		marginBottom: 12
	},
	roleCell: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		height: 20,
	},
	officeText: {
		marginLeft: 22,
	},
	role: {
		width: 30,
		lineHeight: 14,
		backgroundColor: '#FC5454',
		fontSize: 11,
		color: '#fff',
		marginLeft: 11,
		borderRadius: 2
	},
	menuItem: {
		height: 60,
		flexDirection: 'row'
	},
	menuItemLeft: {
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	menuItemPic: {
		width: 34,
		height: 34,
	},
	menuItemRight: {
		flex: 1,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderBottomColor: '#E4E4E4',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingRight: 15
	},
	menuText: {
		color: '#404040'
	},
	menuExplain: {
		color: '#8B8B8B',
		fontSize: 13,
	}
});