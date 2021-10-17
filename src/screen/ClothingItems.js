import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
console.log(height);
console.log(width);

const ClothingItems = () => {
  const image = [
    {
      name: 'Tommy Hilfiger',
      category: 'T-shirt',
      color: 'multi-strips',
      usd: 'USD 23',
      image: require('../assets/tshirt.jpg'),
    },
    {
      name: 'Puma',
      category: 'strip polo',
      color: 'navy blue',
      usd: 'USD 35',
      image: require('../assets/polos.jpg'),
    },
    {
      name: 'Fila',
      category: 'Sweatshirt',
      color: 'Grey',
      usd: 'USD 40',
      image: require('../assets/sweatshirt.jpg'),
    },
    {
      name: 'Roadster',
      category: 'Hoodie',
      color: 'Red & blue',
      usd: 'USD 47',
      image: require('../assets/hood.jpeg'),
    },
  ];

  return (
    <View style={styles.container}>
      {image.map((item) => (
        <View>
          <ImageBackground source={item.image} style={styles.itemImage}>
            <>
              <Text style={styles.newText}>NEW</Text>
              <Image
                source={require('../assets/wishlistItem.png')}
                style={styles.heart}
              />
            </>
          </ImageBackground>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.categoryText}>{item.category}</Text>
          <Text style={styles.colorText}>{item.color}</Text>
          <Text style={styles.usdText}>{item.usd}</Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 3,
    padding: 10,
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  itemImage: {
    height: 270,
    width: 190,
    marginBottom: 15,
    flexDirection: 'row',
  },
  newText: {
    backgroundColor: '#009933',
    width: 45,
    height: 30,
    padding: 5,
    color: '#fff',
  },
  heart: {
    marginTop: 5,
    height: 30,
    width: 30,
    marginLeft: 110,

    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 17,
    marginBottom: 5,
  },
  colorText: {
    fontSize: 17,
    marginBottom: 5,
  },
  usdText: {
    fontSize: 20,
    marginBottom: 28,
  },
});

export default ClothingItems;
