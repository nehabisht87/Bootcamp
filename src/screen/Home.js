import React, {useState} from 'react';
import {View, Switch, StyleSheet, Text} from 'react-native';

import Slider from '@ptomasroos/react-native-multi-slider';

const Home = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const toggle = () => {
    setSwitchValue((val) => !val);
  };

  const SliderValue = (value) => {
    setSliderValue(value);
  };
  return (
    <View style={styles.container}>
      <Switch value={switchValue} onValueChange={toggle} />
      {switchValue ? (
        <View>
          <Slider
            min={0}
            max={100}
            onValuesChange={(value) => SliderValue(value)}
          />
          <Text style={styles.txt}>Slider value is: {sliderValue}</Text>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    marginTop: 50,
    alignContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 80,
  },
});

export default Home;
