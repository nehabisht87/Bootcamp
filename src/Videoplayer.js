import React, { Component } from 'react'
import {SafeAreaView, StyleSheet, Dimensions } from 'react-native'

import Video from 'react-native-video'


const{height, width} = Dimensions.get('window')

export default class Videoplayer extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <Video source={require('./assets/plants-video.mp4')}
      style={styles.video}
      controls={true}
      // paused
      />
    </SafeAreaView>
    )
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: height/4,
    width: width
  },
})