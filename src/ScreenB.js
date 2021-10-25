import React, {useState} from 'react';

import {SafeAreaView, Button, StyleSheet, TextInput, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const ScreenB = ({navigation}) => {
  const [inputText, setInputText] = useState('');

  const onChangeText = text => {
    setInputText(text);
    console.log(text);
  };

  const copyToClipboard = () => {
    Clipboard.setString(inputText);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    alert(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={'Click here to copy text from TextInput to the Clipboard '}
        onPress={copyToClipboard}
      />

      <TextInput
        style={styles.text}
        value={inputText}
        onChangeText={onChangeText}
        placeholder={'Text'}
      />
      <Button
        title={'Show copied text in the alert'}
        onPress={fetchCopiedText}
      />
      <View style={styles.goToScreenC}>
        <Button
          title="Goto ScreenC"
          onPress={() => navigation.navigate('ScreenC')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goToScreenC: {
    marginTop: 30,
  },
  text: {
    width: '80%',
    height: 40,
    color: 'black',
    borderColor: 'grey',
    backgroundColor: '#fff',
    borderWidth: 1,
    marginVertical: 10,
  },
});
export default ScreenB;
