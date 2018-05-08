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

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var scale = ScreenWidth / 375;

export class CustomerRecordsPage extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}
	static navigationOptions = {
		title: '客户',
		color: 'blue',
	};

	componentWillMount() {
	}

	componentWillUnmount() {
	}

	render() {
		return (
			<View style={styles.container}>
				<BottomTabView curMenuId={'cus'} didPressRoute={routeName => this._didPressRoute(routeName)} />
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
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});

