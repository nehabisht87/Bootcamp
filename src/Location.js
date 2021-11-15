import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import MapView, {Callout, Marker} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

const {height, width} = Dimensions.get('window');

class Location extends Component {
  state = {
    latitude: 0,
    longitude: 0,
  };
  getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: false,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        this.setState({longitude: Number(location.longitude)});
        this.setState({latitude: Number(location.latitude)});
        console.log(typeof this.state.latitude);
        console.log(this.state.longitude);
        console.log(this.state);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          >
          <Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}>
            <Callout>
              <Text>Hi, I'm here</Text>
            </Callout>
          </Marker>
        </MapView>
        <TouchableOpacity
          style={styles.locationContainer}
          onPress={this.getLocation}>
          <Text style={styles.locationText}>getLocation</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    height: height / 1.3,
    width: width,
  },
  locationContainer: {
    width: width * 0.805,
    alignSelf: 'center',
    marginVertical: height / 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  locationText: {
    fontSize: height * 0.025,
    fontWeight: 'bold',
  },
  image: {
    height: 25,
    width: 25,
  },
});

export default Location;