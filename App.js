import React from 'react';
import {StyleSheet, View} from 'react-native';
import Tabs from './src/navbar/Tabs';
// import Home from './src/screen/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
