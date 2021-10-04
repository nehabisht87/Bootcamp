import React, {Component} from 'react';
import {Button, View} from 'react-native';
import Child from './Child';
class HomeScreen extends Component {
  state = {
    count: 0,
  };

  constructor() {
    super();
    console.log('Parent Constructor Called');
  }

  static getDerivedStateFromProps = (props, state) => {
    //
    console.log('Parent Get DerivedStateFromProps Called');
    return true;
  };

  shouldComponentUpdate() {
    console.log('Should Component Update Called');
    return true;
  }

  componentDidMount() {
    console.log('Parent ComponentDidMount Called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called');
  }

  updateValue = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };

  render() {
    console.log('Parent Render Called');
    return (
      <View>
        <Child incVal={this.state.count} />
        <Button onPress={this.updateValue} title="Click" />
      </View>
    );
  }
}

export default HomeScreen;
