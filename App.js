import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Videoplayer from './src/Videoplayer';
import Location from './src/Location';
import ScreenA from './src/ScreenA';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Videoplayer"
          component={Videoplayer}
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                title={'Go to ScreenA'}
                onPress={() => navigation.navigate('ScreenA')
                }
              />
            ),
          })}
        />
         <Stack.Screen
          name="ScreenA"
          component={ScreenA}
        />
        <Stack.Screen
          name="Location"
          component={Location}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;