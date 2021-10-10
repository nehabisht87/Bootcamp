import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const OtpLogin = () => {
  const [num, setInputNum] = useState('');
  let arr = [1, 2, 3, 4];
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Log into Saavn</Text>
      </View>

      <ImageBackground
        source={require('../assets/beach.jpeg')}
        style={styles.bgImg}>
        <View style={styles.otpContainer}>
          <Text style={styles.otp}>Enter your code</Text>
        </View>

        <View style={styles.inputContainer}>
          {arr.map(() => {
            return (
              <TextInput
                autoFocus={false}
                keyboardType={'number-pad'}
                style={styles.input}
                maxLength={1}
              />
            );
          })}
        </View>

        <View style={styles.continueBtnContainer}>
          <TouchableOpacity style={styles.continueBtn}>
            <Text style={styles.continueBtnTxt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#034f06',
    height: 100,
    width: '100%',
  },
  headerTxt: {
    marginTop: 35,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  bgImg: {
    width: '100%',
    height: 900,
  },
  otpContainer: {
    marginTop: 80,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otp: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 40,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    color: 'black',
    borderRadius: 5,
    fontSize: 15,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  continueBtnContainer: {
    alignItems: 'center',
  },
  continueBtn: {
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#034f06',
  },
  continueBtnText: {
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
});

export default OtpLogin;
