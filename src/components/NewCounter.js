import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { decrementCounterAction, incrementCounterAction } from '../redux/actions/CounterActions';

export class NewCounter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.props.incrementCounter}>
        <Text style={styles.buttonText}>{'Increment'}</Text>
        </TouchableOpacity>   
        <Text>{this.props.value}</Text>
        <TouchableOpacity onPress={this.props.decrementCounter}>
        <Text style={styles.buttonText}>{'Decrement'}</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {value: state.counter};
};
const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => incrementCounterAction(dispatch),
    decrementCounter: () => decrementCounterAction(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCounter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 12,
    margin: 25,
    backgroundColor: '#9AB973',
  },
});
