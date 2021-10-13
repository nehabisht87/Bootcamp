import React, {Component} from 'react';
import {View} from 'react-native';
import Home from './src/screen/Home';

export class App extends Component {
  render() {
    return (
      <View>
        {/* <Text> textInComponent </Text> */}
        <Home />
      </View>
    );
  }
}

export default App;
