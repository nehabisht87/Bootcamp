import React from 'react';
import {StyleSheet, View} from 'react-native';
import Tabs from './src/navbar/Tabs';

const App = () => {
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
