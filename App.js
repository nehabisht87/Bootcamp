import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>
        {/* <Home /> */}
        <HomeScreen />
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
