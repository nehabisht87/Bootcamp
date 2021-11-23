import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {getData} from '../redux/action/HomeAction';

class HomeScreen extends Component {
  // componentDidMount() {
  //   this.props.fetchApi();
  // }
  render() {
    const {data} = this.props;
    //const arr = data.arrData.map(item => item.first_name);
    return (
      <View style={styles.container}>
        <Text>{this.props.stateVal || 'NA'}</Text>
        <Text>{JSON.stringify(this.props.data.data)}</Text>
        <Button title="Fetch" onPress={() => this.props.fetchApi()} />
      </View>
    );
  }
}
const mapStateToProps = state => {
  const props = {stateVal: state.testVal.name, data: state.dataVal.arrData};
  console.log(state.dataVal.arrData);
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchApi: () => getData(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
