import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  Linking,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Join = () => {
  return (
    <ScrollView style={styles.centeredView}>
      <View>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.userDetail} placeholder="First Name" />
            <TextInput style={styles.userDetail} placeholder="Last Name" />
            <TextInput style={styles.userDetail} placeholder="Your Email" />
            <View style={styles.showB}>
              <TextInput style={styles.passwordB} placeholder="Password" />
              <Button title="Show" style={styles.showPassB} />
            </View>
            <View style={styles.phone}>
              <Image
                style={styles.usaCode}
                source={require('../assets/modalIcons/icons8-usa-16.png')}
              />
              <TextInput
                style={styles.userPhone}
                placeholder="+1 123 456 7890 "
              />
            </View>
            <View style={styles.radioItems}>
              <TouchableOpacity>
                <Image
                  style={styles.Img}
                  source={require('../assets/modalIcons/icons8-unchecked-radio-button-48.png')}
                />
                <Text style={styles.radio}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.Img}
                  source={require('../assets/modalIcons/icons8-unchecked-radio-button-48.png')}
                />
                <Text style={styles.radio}>Female</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.checkItems}>
              <TouchableOpacity>
                <Image
                  style={styles.Img}
                  source={require('../assets/modalIcons/icons8-checked-checkbox-100.png')}
                />
                <Text style={styles.check}>
                  Be the first to know about new arrivals, sales & promos by
                  submitting your email! You can opt out at any time.
                </Text>
                <Text
                  style={styles.link}
                  onPress={() =>
                    Linking.openURL(
                      'https://en.wikipedia.org/wiki/Privacy_policy',
                    )
                  }>
                  Privacy Policy
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.normal}>
                <Text style={styles.signIn}>Join Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.social}>
                <Image
                  style={styles.socialImg}
                  source={require('../assets/modalIcons/icons8-google-40.png')}
                />
                {/* <Text>or</Text> */}
                <Text style={styles.socialSignIn}>Join with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.social}>
                <Image
                  style={styles.socialImg}
                  source={require('../assets/modalIcons/icons8-facebook-48.png')}
                />
                <Text style={styles.socialSignIn}>Join with Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.social}>
                <Image
                  style={styles.socialImg}
                  source={require('../assets/modalIcons/icons8-apple-logo-50.png')}
                />
                <Text style={styles.socialSignIn}>Join with Apple</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.noAccount}>
                <Text style={styles.noAccounText}>
                  Already have an account? Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Join;

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
    // borderRadius: 20,
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
  },
  passwordB: {
    marginBottom: 14,
    textAlign: 'center',
    fontSize: 15,
    padding: 6.5,
    borderWidth: 1,
    position: 'absolute',
    width: '50%',
  },
  showB: {
    flexDirection: 'row',
  },
  showPassB: {
    fontSize: 15,
    // marginLeft: 10,
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
  phone: {
    flexDirection: 'row',
  },
  usaCode: {
    height: 25,
    width: 25,
  },
  userDetail: {
    marginBottom: 22,
    fontSize: 15,
    paddingVertical: 8,
    paddingHorizontal: 40,
    textAlign: 'left',
    borderWidth: 1,
    width: '80%',
  },
  userPhone: {
    marginBottom: 22,
    fontSize: 15,
    paddingVertical: 8,
    paddingHorizontal: 40,
    textAlign: 'left',
    borderWidth: 1,
    width: '70%',
  },
  radioItems: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  radio: {
    fontSize: 15,
    marginHorizontal: 40,
  },
  checkItems: {
    flexDirection: 'row',
  },
  check: {
    fontSize: 12,
  },
  Img: {
    height: 16,
    width: 16,
  },
  link: {
    color: 'blue',
  },
});
