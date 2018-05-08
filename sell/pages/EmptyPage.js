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

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var scale = ScreenWidth / 375;

export class CustomerRecordsPage extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
	}

	componentWillUnmount() {
	}

	render() {
		return (
			<View></View>
		);
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

