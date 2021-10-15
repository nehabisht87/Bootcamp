import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import List from './src/screen/List';

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <List />
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
