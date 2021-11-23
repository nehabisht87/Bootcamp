import * as React from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileListingScreen from './src/screens/ProfileListingScreen';
import EditProfile from './src/screens/EditProfile';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="ProfileListing" 
        component={ProfileListingScreen} 
        options={({ navigation }) => ({
          headerRight: () => (
            <Button
              title={'Edit Profile'}
              onPress={() => navigation.navigate('EditProfile')
              }
            />
          ),
        })} 
        />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})
