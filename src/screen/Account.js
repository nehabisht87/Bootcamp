import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const DATA1 = [
  {
    id: 1,
    title: 'Track Order',
  },
  {
    id: 2,
    title: 'Size Chart',
  },
  {
    id: 3,
    title: 'Notifications',
  },
  {
    id: 4,
    title: 'Store Locator',
  },
];
const DATA2 = [
  {
    id: 1,
    title: 'Country',
  },
  {
    id: 2,
    title: 'Language',
  },
  {
    id: 3,
    title: 'About Us',
  },
  {
    id: 4,
    title: 'FAQ',
  },
  {
    id: 5,
    title: 'Shipping & Returns',
  },
  {
    id: 6,
    title: 'Chat with Us',
  },
  {
    id: 7,
    title: 'Rate Application',
  },
  {
    id: 8,
    title: 'Share Application',
  },
  {
    id: 9,
    title: 'Privacy Policy',
  },
  {
    id: 10,
    title: 'Terms & Conditions',
  },
  {
    id: 11,
    title: 'Send Us An Email',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const Item2 = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Account = () => {
  const renderItem = ({item}) => <Item title={item.title} />;
  const renderData = ({item}) => <Item2 title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome!</Text>
        <Image
          source={require('../assets/AccountIcons/icons8-person-64.png')}
          style={styles.imageText}
        />
      </View>
      <View style={styles.authContainer}>
        <TouchableOpacity style={styles.auth}>
          <Text>SIGN |</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.auth}>
          <Text>JOIN</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.list1}>
          <FlatList
            data={DATA1}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
      <ScrollView>
        <View style={styles.list2}>
          <FlatList
            data={DATA2}
            renderItem={renderData}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    alignContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  headerText: {
    marginHorizontal: 30,
    marginTop: 20,
    fontSize: 20,
  },
  imageText: {
    marginLeft: 130,
  },
  authContainer: {
    flexDirection: 'row',
    // marginBottom: 10,
    backgroundColor: 'white',
  },
  auth: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  list1: {
    marginTop: 14,
    marginBottom: 14,
  },
  // list2:{

  // }
});

export default Account;
