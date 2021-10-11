import React from 'react';
import {View, Text, Button} from 'react-native';

const Detail = ({navigation, route}) => {
  // console.log(navigation)
  console.log(route);
  return (
    <View>
      <Text title="Hi" />
      <Button
        title="Go Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Detail;
