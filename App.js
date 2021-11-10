import {Provider} from 'mobx-react';
import React, {Component} from 'react';
import RootStore from './src/store';
import Nav from './src/routes/Nav';


export default class App extends Component {
  render() {
    const rootStore = new RootStore();
    return (
      <Provider
         addNoteStore={rootStore.addNoteStore}>
          <Nav />
      </Provider>
    );
  }
}
