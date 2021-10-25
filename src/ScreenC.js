import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const ScreenC = ({navigation}) => {
  const [copiedText, setCopiedText] = useState('');

  const onChangeText = text => {
    setCopiedText(text);
    console.log(text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Paste the copied text below: -</Text>

      <TextInput
        style={styles.textInput}
        value={copiedText}
        onChangeText={onChangeText}
        placeholder={'Copied Text'}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ScreenA')}>
        <Text style={styles.goToScreenA}>Go to ScreenA</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goToScreenA: {
    backgroundColor: '#C7F51B',
    color: 'black',
    padding: 15,
    fontSize: 22,
    marginTop: 30,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  textInput: {
    width: '85%',
    color: 'black',
    height: 50,
    borderColor: 'grey',
    padding: 10,
    borderWidth: 0.75,
    marginVertical: 50,
  },
});

export default ScreenC;
