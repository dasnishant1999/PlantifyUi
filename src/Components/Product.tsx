import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Heart from '../Assets/Heart.svg';
import Basket from '../Assets/Basket.svg';
import Footprint from '../Assets/Footprint.svg';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  size: string;
  water: string;
  light: string;
  fertilizer: string;
  bio: string;
  image: string;
};

interface Props {
  product: Product;
}

const Product = ({product}: Props) => {
  const {category, name, price, image} = product;
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation?.navigate('ProductDetails', {productDetails: product})
      }>
      <View style={styles.outerConatiner}>
        <View style={styles.innerContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{category}</Text>
            <Footprint width={16} height={16} style={styles.footPrintLogo} />
          </View>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.bottomContainer}>
            <Text style={styles.price}>{`$${price}`}</Text>
            <View style={styles.logoContainer}>
              <Heart width={24} height={22} />
              <Basket width={56} height={56} style={styles.basketLogo} />
            </View>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image src={image} style={styles.image} />
        </View>
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  outerConatiner: {
    backgroundColor: 'red',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: Dimensions.get('window').width - 20,
    alignSelf: 'center',
  },
  innerContainer: {
    borderRadius: 28,
    padding: 24,
    backgroundColor: '#9CE5CB',
    width: '80%',
    flexDirection: 'column',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    right: 60,
    top: -50,
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').height * 0.24,
  },
  image: {
    width: '100%',
    height: '100%',
    // resizeMode: 'contain',
    overflow: 'visible',
  },
  title: {
    marginBottom: 24,
    color: '#002140',
    fontFamily: 'Philosopher',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 40,
  },
  header: {
    color: '#002140',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  price: {
    color: '#002140',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 62,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  footPrintLogo: {
    marginLeft: 20,
  },
  basketLogo: {
    marginLeft: 18,
  },
});
