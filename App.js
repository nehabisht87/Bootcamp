import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Home from './src/screen/Home';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.txt}> Switch and Slider Implementation </Text>

        {/* <TouchableOpacity
          style={{ backgroundColor: 'red', height: 20 }}
          hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
        >
          <Text style={styles.label}>With hitSlop</Text>
        </TouchableOpacity> */}

        {/* <Text
          // suppressHighlighting ='true'
          style={{ fontSize: 20 }}
          ellipsizeMode='clip' // tail, head or middle
          numberOfLines={1}>
          iufwebfiuwehocecefwfwefvwervewfouhefvegvervgrwrewfwrgwfvwvervfvefervfwrvrwvwrfvrdgrwgvergvrervwrow
        </Text>
         */}
        <Home />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  txt: {
    marginTop: 50,
    alignContent: 'center',
    marginLeft: 90,
  },
  label: {
    fontSize: 18,
    color: '#336699',
    textAlign: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default App;
