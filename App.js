import React, {Component} from 'react';
// import {View} from 'react-native';
import {Provider} from 'react-redux';
import NewCounter from './src/components/NewCounter';
import store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NewCounter />
      </Provider>
    );
  }
}
