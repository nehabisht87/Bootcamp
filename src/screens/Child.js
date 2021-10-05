import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Child = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{props.countValue}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
  },
  counter: {
    fontSize: 80,
    fontWeight: 'bold',
  },
});

export default Child;
