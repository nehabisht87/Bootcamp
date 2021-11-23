import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  ProjectScreen,
  SkillsScreen,
  AccountScreen,
} from '../screen';

import {HomeIcon, ProjectIcon, SkillIcon, AccountIcon} from '../constant';
import {Image, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: '#888',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'My Application',
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.icon, {tintColor: focused ? 'orange' : '#888'}]}
              source={HomeIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Skill"
        component={SkillsScreen}
        options={{
          headerTitle: 'My Project',
          title: 'Project',
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.icon, {tintColor: focused ? 'orange' : '#888'}]}
              source={ProjectIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerTitle: 'My Skills',
          title: 'Skills',
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.icon, {tintColor: focused ? 'orange' : '#888'}]}
              source={SkillIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProjectScreen}
        options={{
          headerTitle: 'My Account',
          title: 'Account',
          tabBarIcon: ({focused}) => (
            <Image
              style={[styles.icon, {tintColor: focused ? 'orange' : '#888'}]}
              source={AccountIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function StackTab() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          options={{headerShown: false}}
          name="Tabs"
          component={BottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
