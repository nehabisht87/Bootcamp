import React, {Component} from 'react';
import {View} from 'react-native';
import OtpLogin from './src/screen/OtpLogin';

export class App extends Component {
  render() {
    return (
      <View>
        <OtpLogin />
      </View>
    );
  }
}

export default App;
