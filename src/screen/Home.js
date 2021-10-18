import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator} from 'react-native';

const Home = () => {
  const [data, setData] = useState('abc ');
  const [isLoading, setIsLoading] = useState(false);

  buttonPress = () => {
    setIsLoading(true);
    console.log('Button pressed');
    fetch('https://reqres.in/api/users', {
        method: "GET"
    })
      .then((response) => response.json())
      .then((data) => setData(data))
    setIsLoading(false);

  };
  return (
    <View style={styles.container}>
        <ActivityIndicator size='large' animating={isLoading} />
      <Text style={styles.txtContainer}>
          {JSON.stringify(data)}
      </Text>
      <Button onPress={buttonPress} title="Submit" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 50,
  },
})

export default Home;
