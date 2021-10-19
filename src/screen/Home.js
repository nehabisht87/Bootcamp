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
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.SignIn}>
          <Text style={styles.sign}>SignIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Join}>
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
  modalView: {
    margin: 10,
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
    marginTop: 40,
    marginBottom: 28,
    textAlign: 'center',
    fontSize: 20,
  },
  password: {
    marginBottom: 30,
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
  forgotPassword: {
    marginBottom: 25,
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
  button: {
    marginLeft: 250,
    // borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    // backgroundColor: '#2196F3',
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
    fontSize: 18,
    marginLeft: 30,
    padding: 18,
  },
});

export default Home;
