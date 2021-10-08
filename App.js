import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Home from './src/screen/Home';

export class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text> </Text>
        <Home />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
