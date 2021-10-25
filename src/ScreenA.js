import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

const ScreenA = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ScreenB')}>
        <Text style={styles.goToScreenB}>Go to ScreenB</Text>
      </TouchableOpacity>
      <Text style={styles.alertText}>Click to use Alert</Text>
      <Button
        title={'Go to alert'}
        onPress={() => navigation.navigate('AlertFeature')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goToScreenB: {
    backgroundColor: '#F1C26A',
    color: 'black',
    padding: 15,
    fontSize: 20,
    marginBottom: 30,
  },
  alertText: {
    marginVertical: 25,
    fontWeight: 'bold',
  },
});
export default ScreenA;
