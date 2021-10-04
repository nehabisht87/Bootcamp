import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class Child extends Component {
  render() {
    console.log('Child component called');
    return (
      <View>
        <Text style={styles.counter}>{this.props.incVal}</Text>
      </View>
    );
  }
}
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
