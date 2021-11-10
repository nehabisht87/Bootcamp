import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import HomeScreen from '../screen/HomeScreen';
import AddNote from '../screen/AddNote';

const Stack = createNativeStackNavigator();

export default class Nav extends Component {
  render() {
    return (
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator >
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
              title: 'Simple Note Maker', headerStyle: {
                backgroundColor: '#3aae6d',
              }
            }} />
            <Stack.Screen name="AddNote" component={AddNote} options={{
              headerStyle: {
                backgroundColor: '#3aae6d',
              }
            }
            } />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3aae6d',
  },
})