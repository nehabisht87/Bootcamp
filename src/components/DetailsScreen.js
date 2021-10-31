import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

const {height, width} = Dimensions.get('window');

class DetailsScreen extends Component {
  state = {
    object: this.props.route.params,
    title: this.props.route.params.title,
    body: this.props.route.params.body,
    id: this.props.route.params.id,
  };

  changeTitle = text => {
    
    this.setState({title: text});
  };

  changeBody = text => {
    this.setState({body: text});
  };

 updateObjectData = () =>{
     this.state.object.title = this.state.title
     this.state.object.body = this.state.body
     console.log(this.state.object)
     this.props.updateObject(this.state)
     this.props.saveData()
     this.props.navigation.navigate('Home')
 }

  render() {
    
    const title = this.state.object.title;
    return (
      <View style={styles.container}>
        <Text style={{marginBottom: 10, color: '#0073E5', fontWeight: 'bold'}}>Edit the Title </Text>
        <TextInput
          placeholder="Edit title"
          value = {this.state.title}
          onChangeText={text => {
            this.changeTitle(text);
          }}
          style={styles.titleText}
          multiline={true}
        />
        <Text style={{marginBottom: 10, color: '#0073E5', fontWeight: 'bold'}}>Edit the Body Text</Text>

        <TextInput
          placeholder="Edit Body"
        value={this.state.body}
          onChangeText={text => {
            this.changeBody(text);
          }}
          style={styles.bodyText}
          multiline={true}
        />

        <TouchableOpacity onPress={this.updateObjectData}>
            <Text style={styles.saveButtonText}>
            Save Data & navigate to Home
            </Text>
            </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F2BA',
  },
  headingText: {
    backgroundColor: '#0B3861',
    color: '#fff',
    textAlign: 'center',
    fontSize: height / 20,
    padding: 10,
    width: width * 0.8,
    alignSelf: 'center',
  },
  titleText: {
    backgroundColor: '#FFF3F8',
    padding: 10,
    width: width * 0.75,
    marginBottom: height / 50,
    color: '#0B3861',
    alignSelf: 'center',
    fontSize: height / 50,
    height: height * 0.1,
    width: width * 0.9,
    borderRadius: height / 30,
    borderWidth: 0.75,
    borderColor: '#994766',
  },
  bodyText: {
    backgroundColor: '#FFF3F8',
    color: '#525252',
    alignSelf: 'center',
    padding: height / 60,
    fontSize: height / 50,
    height: height * 0.2,
    width: width * 0.9,
    borderRadius: height / 30,
    borderWidth: 0.75,
    borderColor: '#994766',
  },
  saveButtonText: {
      marginTop: 20,
      color: '#645188',
      backgroundColor: '#AAFF77',
      fontSize: 15, 
      fontWeight: 'bold',
      padding: 10,
 },
});

const mapStateToProps = state => {
    return {data: state.apiData};
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      updateObject: apiData => dispatch({type: 'UPLOAD_OBJECT', payload: apiData}),
      saveData: () => dispatch({type: 'SAVE'}),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
  