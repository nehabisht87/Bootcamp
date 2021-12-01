import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const SignIn = () => {
  return (
    <ScrollView style={styles.centeredView}>
      <View style={styles.centeredView}>
        <View>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.email}
                placeholder="Your Email Address"
              />
              <View style={styles.show}>
                <TextInput style={styles.password} placeholder="Password" />
                <Button title="Show" style={styles.showPass} />
              </View>
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password</Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity style={styles.normal}>
                  <Text style={styles.signIn}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.social}>
                  <Image
                    style={styles.socialImg}
                    source={require('../assets/modalIcons/icons8-google-40.png')}
                  />
                  <Text style={styles.socialSignIn}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.social}>
                  <Image
                    style={styles.socialImg}
                    source={require('../assets/modalIcons/icons8-facebook-48.png')}
                  />
                  <Text style={styles.socialSignIn}>Sign in with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.social}>
                  <Image
                    style={styles.socialImg}
                    source={require('../assets/modalIcons/icons8-apple-logo-50.png')}
                  />
                  <Text style={styles.socialSignIn}>Sign in with Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noAccount}>
                  <Text style={styles.noAccounText}>
                    Don't have an account? Join
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  SignIn: {
    marginHorizontal: 50,
  },
  Join: {
    marginHorizontal: 50,
  },
  sign: {
    fontSize: 30,
  },
  button: {
    marginLeft: 30,
    elevation: 2,
  },
  modalView: {
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  email: {
    marginTop: 30,
    marginBottom: 28,
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 0.5,
    paddingVertical: 7,
    paddingHorizontal: 14,
  },
  password: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderWidth: 0.5,
  },
  show: {
    flexDirection: 'row',
  },
  showPass: {
    fontSize: 20,
    marginLeft: 10,
  },
  forgotPassword: {
    marginBottom: 22,
    textAlign: 'center',
    fontSize: 16,
  },
  social: {
    flexDirection: 'row',
  },
  normal: {
    backgroundColor: 'black',
    // borderRadius: 10,
    marginVertical: 20,
    padding: 10,
  },
  signIn: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  socialImg: {
    height: 25,
    width: 25,
  },
  socialSignIn: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 18,
    marginLeft: 30,
    padding: 10,
  },
  signInModalOpen: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noAccount: {
    backgroundColor: '#FFFAFA',
    borderColor: 'rgb(128,128,128)',
    borderWidth: 2,
  },
  noAccounText: {
    color: '#696969',
    textAlign: 'center',
    fontSize: 15,
    marginLeft: 30,
    padding: 15,
  },
  userDetail: {
    marginBottom: 22,
    fontSize: 15,
    paddingVertical: 8,
    paddingHorizontal: 40,
    textAlign: 'left',
  },
  Img: {
    height: 16,
    width: 16,
  },
});

export default SignIn;
