import * as React from 'react';
import {StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CartScreen,
  HomeScreen,
  CategoriesScreen,
  MyAccountScreen,
  WishlistScreen,
} from '../screen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../assets/home.jpeg')}
                style={styles.tabImage}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../assets/cart.png')}
                style={styles.tabOtherImage}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={WishlistScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../assets/wishlist.png')}
                style={styles.tabImage}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../assets/categories.png')}
                style={styles.tabImage}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MyAccount"
          component={MyAccountScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('../assets/account.png')}
                style={styles.tabImage}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  tabImage: {
    height: 25,
    width: 25,
    // tintColor: focused ? '#fada5e' : '#748c94',
  },
  tabOtherImage: {
    height: 25,
    width: 25,
  },
});

export default Tabs;
