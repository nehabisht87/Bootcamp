import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './src/screen/Home';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
