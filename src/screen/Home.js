import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = ({navigation, route}) => {
  console.log(route);
  return (
    <View style={styles.container}>
      <Text />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Detail', {headerTitle: 'DetailScreen'})
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
