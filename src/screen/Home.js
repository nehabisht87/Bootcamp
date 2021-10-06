import React from 'react';
import {View, StyleSheet, Text, ScrollView, Button} from 'react-native';

const Home = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Product Details</Text>
          </View>
          <View style={styles.img} />
          <View style={styles.imgText}>
            <Text style={styles.text}>
              How to Train YourDragon The Hidden World
            </Text>
          </View>
          <View style={styles.about}>
            <Text>Part III</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Adventure</Text>
            <Text style={styles.buttonText}>Family</Text>
            <Text style={styles.buttonText}>Fantasy</Text>
          </View>
          <View style={styles.description}>
            <View style={styles.info}>
              <Text style={styles.infoTextA}>Year</Text>
              <Text style={styles.infoTextB}>2019</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoTextA}>Country</Text>
              <Text style={styles.infoTextB}>USA</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoTextA}>Length</Text>
              <Text style={styles.infoTextB}>112 min</Text>
            </View>
          </View>
        </View>
        <View style={styles.MovieContainer}>
          <View>
            <Text style={styles.MovieHead}>About Movie</Text>
          </View>
          <View>
            <Text style={styles.MovieContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>
          <View>
            <Text style={styles.snap}>Screenshots</Text>
          </View>
        </View>

        <View style={styles.ssImg}>
          <View style={styles.imageA} />
          <View style={styles.imageB} />
        </View>
        <View style={styles.buttonTick}>
          <Button title="BUY TICKET" />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  headingContainer: {
    height: 80,
    width: '100%',
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  img: {
    height: 200,
    width: '70%',
    backgroundColor: 'yellow',
    marginTop: 10,
  },
  imgText: {
    height: 80,
    width: '70%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
  },
  buttonText: {
    padding: 10,
    margin: 10,
    color: 'white',
    borderRadius: 18,
    backgroundColor: 'blue',
    overflow: 'hidden',
    fontWeight: 'bold',
  },
  about: {
    marginBottom: 20,
  },
  description: {
    flexDirection: 'row',
  },
  info: {
    margin: 20,
  },
  infoTextA: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 14,
  },
  infoTextB: {
    textAlign: 'center',
    fontSize: 18,
  },
  MovieContainer: {
    marginHorizontal: 15,
  },
  MovieHead: {
    marginBottom: 14,
    fontSize: 15,
  },
  MovieContent: {
    fontSize: 15,
    marginBottom: 14,
    color: 'grey',
  },
  snap: {
    fontSize: 15,
    marginBottom: 14,
  },
  ssImg: {
    flexDirection: 'row',
  },
  imageA: {
    height: 100,
    width: '40%',
    backgroundColor: 'orange',
    marginHorizontal: 30,
    borderRadius: 10,
  },
  imageB: {
    height: 100,
    width: '40%',
    backgroundColor: 'green',
    borderRadius: 10,
    marginBottom: 18,
  },
  buttonTick: {
    width: '95%',
    marginHorizontal: 20,
  },
});
export default Home;
