import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmployeeListingScreen from './src/screens/EmployeeListingScreen';
import AddEmployeeScreen from './src/screens/AddEmployeeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="EmployeeListingScreen" 
        component={EmployeeListingScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Button
              title={'+ AddEmployee'}
              onPress={() => navigation.navigate('AddEmployeeScreen')
              }
            />
          ),
        })} 
        />
        <Stack.Screen name="AddEmployeeScreen" component={AddEmployeeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;