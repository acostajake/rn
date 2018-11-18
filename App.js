import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Photo from './components/Photo';
import Greeting from './components/Greeting';
import Input from './components/Input';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Another line above!</Text>
        <Photo />
        <Text>App.js open again!</Text>
        <Greeting name='ANNABELLE' />
        <Input />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
