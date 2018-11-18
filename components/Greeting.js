import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <View className='greetText' style={{ alignItems: 'center' }}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

export default Greeting;
AppRegistry.registerComponent('scroll_app', () => Greeting);