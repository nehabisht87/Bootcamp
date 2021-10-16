import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeActivity from './src/HomeActivity';

const App = () => {
  return (
    <View style={styles.container}>
      <HomeActivity />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
