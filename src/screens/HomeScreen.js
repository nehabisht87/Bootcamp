import React, {useState} from 'react';
import {View, Button} from 'react-native';
import Child from './Child';

const HomeScreen = () => {
  const [countValue, setCountValue] = useState(0);
  const updateValue = () => {
    return setCountValue(countValue + 1);
  };

  return (
    <View>
      <Child countValue={countValue} />
      <Button onPress={updateValue} title="Click" />
    </View>
  );
};
export default HomeScreen;
