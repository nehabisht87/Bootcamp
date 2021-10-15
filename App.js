import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './src/screen/Home';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}> Switch and Slider Implementation </Text>
        <Home />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    marginTop: 50,
    alignContent: 'center',
    marginLeft: 90,
  },
});

export default App;
