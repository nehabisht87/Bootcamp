import * as React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/screen/Signup';
import HomeScreen from './src/screen/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
        options={({navigation}) => ({
          headerRight: () => (
            <Button
              title={'Logout'}
              onPress={() => navigation.navigate('Signup')
              }
            />
          ),
        })}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
