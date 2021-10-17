import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import Tabs from './src/navbar/Tabs';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Tabs />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
