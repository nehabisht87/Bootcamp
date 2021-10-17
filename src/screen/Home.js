import React from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ClothingItems from './ClothingItems';

const Home = (props) => {
  const button = ['T-Shirts', 'Polos', 'Sweatshirts', 'Hoodie'];
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.txtItems}
              placeholder="195 items"
              underlineColorAndroid="transparent"
            />
            <Image
              style={styles.imgSort}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/130/130898.png',
              }}
            />
            <TouchableOpacity>
              <Text style={styles.txtSort}> SORT |</Text>
            </TouchableOpacity>
            <Image
              style={styles.imgFilter}
              source={{
                uri: 'https://static.thenounproject.com/png/106584-200.png',
              }}
            />
            <TouchableOpacity>
              <Text style={styles.txtFilter}>FILTER</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.buttonContainer}>
              {button.map((item) => (
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <ClothingItems />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  searchBar: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  txtItems: {
    flex: 1,
  },
  imgSort: {
    padding: 10,
    marginLeft: 8,
    height: 25,
    width: 25,
  },
  txtSort: {
    flex: 1,
  },
  imgFilter: {
    padding: 10,
    height: 25,
    width: 25,
  },
  txtFilter: {
    flex: 1,
  },
  buttonContainer: {
    height: 70,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  button: {
    height: 45,
    width: 100,
    backgroundColor: '#f2f2f2',
    margin: 5,
    marginTop: 13,
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Home;
