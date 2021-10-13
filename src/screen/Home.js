import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const ColorCode = (hex) => {
  const [value, SetValue] = useState('');
  const [color, SetColor] = useState([]);

  btnPress = (props) => {
    const pattern = /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

    if (value.length == ' ') {
      alert('Please Enter the HexCode');
    } else if (pattern.test(value) === false) {
      alert('Invalid HexCode');
    } else {
      var hexToRgb = (value) =>
        value.replace((r, g, b) => r + g + b)
          .substring(1)
          .match(/.{2}/g)
          .map((x) => parseInt(x, 16));
      console.log(hexToRgb(value));
      SetColor(hexToRgb(value));
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={{
            width: 500,
            height: 140,
            backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
          }}></View>
        <Text style={styles.header}>HexCode to RGB Color Code Convertor</Text>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.textInput}
            value={value}
            onChangeText={(text) => SetValue(text)}
            placeholder="Enter the HexCode"
          />
        </View>
        <Text style={styles.CodeIndicator}>
          RGB Color: {color[0]}, {color[1]}, {color[2]}
        </Text>

        <TouchableOpacity style={styles.btnContainer} onPress={btnPress}>
          <Text style={styles.btnTxt}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold',
  },
  InputContainer: {
    borderWidth: 2,
    borderColor: '#000',
    width: '50%',
    margin: 100,
    paddingLeft: 15,
  },
  textInput: {
    padding: 15,
    fontSize: 18,
  },
  CodeIndicator: {
    color: 'purple',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnContainer: {
    backgroundColor: 'lightgreen',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 30,
    borderRadius: 20,
  },
  btnTxt: {
    fontSize: 20,
  },
});

export default ColorCode;
