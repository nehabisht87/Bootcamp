import * as React from 'react';
import { Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Videoplayer from './src/Videoplayer';
import Audioplayer from './src/Audioplayer';
// import Location from './src/Location';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Videoplayer" 
        component={Videoplayer}
        options={({navigation}) => ({
          headerRight: () => (
            <Button
              title={'Go to Audioplayer'}
              onPress={() => navigation.navigate('Audioplayer')
              }
            />
          ),
        })}   
        />
         <Stack.Screen name="Audioplayer"
          component={Audioplayer}
          // options={({navigation}) => ({
          //   headerRight: () => (
          //     <Button
          //       title={'Go to Location'}
          //       onPress={() => navigation.navigate('Location')
          //       }
          //     />
          //   ),
          // })}     
          />
        {/* <Stack.Screen 
        name="Location" 
        component={Location}
        /> */}
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;