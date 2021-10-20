import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
  Button,
  Linking,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [joinModal, setJoinModal] = useState(false);

  return (
    <View style={styles.centeredView}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.SignIn}>
          <Text style={styles.sign}>SignIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Join}
          onPress={() => setJoinModal(true)}>
          <Text style={styles.sign}>Join</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Image
                source={require('../assets/modalIcons/icons8-close-window-24.png')}
              />
            </Pressable>
            <TextInput style={styles.email}>Your Email Address</TextInput>
            <View style={styles.show}>
              <TextInput style={styles.password}>Password</TextInput>
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
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={joinModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setJoinModal(!joinModal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setJoinModal(!joinModal)}>
              <Image
                source={require('../assets/modalIcons/icons8-close-window-24.png')}
              />
            </Pressable>
            <TextInput style={styles.userDetail}>First Name</TextInput>
            <TextInput style={styles.userDetail}>Last Name</TextInput>
            <TextInput style={styles.userDetail}>Your Email</TextInput>
            <View style={styles.showB}>
              <TextInput style={styles.passwordB}>Password</TextInput>
              <Button title="Show" style={styles.showPassB} />
            </View>
            <View style={styles.phone}>
              <Image
                style={styles.usaCode}
                source={require('../assets/modalIcons/icons8-usa-16.png')}
              />
              <Text style={styles.userDetail}>+1 | </Text>
              <TextInput style={styles.userDetail}>123 456 7890 </TextInput>
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
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  nav: {
    flexDirection: 'row',
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
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    // backgroundColor: '#2196F3',
    marginLeft: 280,
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
  password: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
  show: {
    flexDirection: 'row',
  },
  showPass: {
    fontSize: 20,
    marginLeft: 10,
  },
  passwordB: {
    marginBottom: 14,
    textAlign: 'center',
    fontSize: 15,
    padding: 6.5,
  },
  showB: {
    flexDirection: 'row',
  },
  showPassB: {
    fontSize: 15,
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

export default Home;
