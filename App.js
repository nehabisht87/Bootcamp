import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Home from './src/screen/Home';
import Detail from './src/components/Detail';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Detail"
            component={Detail}
          //passing name value as a prop
          options={({route}) => ({title: route.params.headerTitle})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
