import React, { Component } from 'react'
import { Text, Image, StatusBar, StyleSheet, Button, View, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { getData } from '../redux/actions/UpdateProfileAction';
import EditProfile from './EditProfile';

class ProfileListingScreen extends Component {
  state = {
    showList: true,
    showGrid: false,
  }
  showList() {
    this.setState({ showList: true, showGrid: false })

  }
  showGrid() {
    this.setState({ showGrid: true, showList: false })

  }
  handlePress() {
    this.props.navigation.navigate('EditProfile');
  }
  listItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      // onLongPress={() => this.deleteActionIcon()}
      onPress={() => this.handlePress(item)}>
      {/* {this.state.deleteIcon ? (
        <TouchableOpacity onPress={() => this.deleteAction()}>
          <Image style={styles.DeleteIcon} source={DeleteIcon} />
        </TouchableOpacity>
      ) : null} */}
      <Image style={styles.avatar} source={{uri: item.avatar}} />
      <Text style={styles.name}>
        {item.first_name}
        {item.last_name}
      </Text>
    </TouchableOpacity>
  );
  componentDidMount() {
    this.props.fetchApi();
  }
  render() {

    return (
      <View style={styles.container}>

        <View style={styles.toggleButon}>
          <TouchableOpacity onPress={() => { this.showList() }} >
            <Image style={styles.listIcon} source={require('../assets/listicon.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.showGrid() }} >
            <Image style={styles.listIcon} source={require('../assets/grid.png')} />
          </TouchableOpacity>
        </View>

        {this.state.showList ? <Text>fjhvifi</Text> : null}
        {this.state.showGrid ? <Text>fvevervr</Text> : null}
        <View>
          {/* <Text>{this.props.stateVal || 'NA'}</Text> */}
          {/* <Text>{JSON.stringify(this.props.data.data)}</Text> */}

          {/* <Button title="Fetch"
            onPress={() => this.props.fetchApi()} /> */}

          <FlatList
          data={this.props.data.data}
          renderItem={this.listItem}
          keyExtractor={item => item.id}
        />
        </View>

      </View>

    )
  }
}
const mapStateToProps = state => {
  const props = { stateVal: state.testVal.name, data: state.dataVal.arrData };
  console.log(state.dataVal.arrData);
  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchApi: () => getData(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileListingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  toggleButon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 80
  },
  listIcon: {
    height: 25,
    width: 25,
    marginHorizontal: 30,
  },
  gridIcon: {
    height: 30,
    width: 30,
    marginHorizontal: 30,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#ECECF1',
  },
  title: {
    fontSize: 25,
    backgroundColor: '#ECECF1',
    color: '#7F3B55',
    fontWeight: 'bold',
  },
  body: {
    color: 'black',
    fontSize: 15,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 10,
  }
  // item: {
  //   backgroundColor: "#f9c2ff",
  //   padding: 20,
  //   marginVertical: 8
  // },
  // header: {
  //   fontSize: 32,
  //   backgroundColor: "#fff"
  // },
  // title: {
  //   fontSize: 24
  // }
})
