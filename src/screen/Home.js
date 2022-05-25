import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

import MapView, {Callout, Marker} from 'react-native-maps';

const Mapview = () => {
  const [pin, setPin] = useState({
    latitude: 28.59343,
    longitude: 77.30845,
  });

  return (
    <SafeAreaView style={styles.conatiner}>
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 28.59343,
            longitude: 77.30845,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          //   provider='google'
        >
          <Marker
            coordinate={pin}
            draggable={true}
            onDragStart={e => {
              console.log('Drag start', e.nativeEvent.coordinates);
            }}
            onDragEnd={e => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}>

            <Callout>
              <Text>I'm here</Text>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  map: {
    height: height,
    width: width,
  },
});

export default Mapview;
