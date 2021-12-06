import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
} from 'react-native';

@inject('counterStore', 'loginStore')
@observer
export default class Counter extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text>{this.props.counterStore.getUpdatedCount}</Text>
          <Button
            title={'Increment'}
            onPress={() => this.props.counterStore.increment()}
          />
          <Button
            title={'Decrement '}
            onPress={() => this.props.counterStore.decrement()}
          />
          <Button
            title={'Update By 5 '}
            onPress={() => this.props.counterStore.updateByValue(5)}
          />
          <Text style={{fontSize: 20, color: 'red'}}>
            {this.props.loginStore.getName || 'NA'}
          </Text>
          <TextInput
            value={this.props.loginStore.getName}
            style={{backgroundColor: 'yellow', width: '90%', height: 40}}
            placeholder={'enter Name'}
            onChangeText={text => this.props.loginStore.updateName(text)}
          />
          <Button
            title={'clear text'}
            onPress={() => this.props.loginStore.updateName('')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
