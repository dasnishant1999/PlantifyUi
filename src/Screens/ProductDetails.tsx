import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import Footprint from '../Assets/Footprint.svg';
import RatingIcon from '../Assets/Rating.svg';
import Basket from '../Assets/Basket.svg';
import Favourite from '../Assets/Favourite.svg';

const ProductDetails = ({route}) => {
  const productDetails = route?.params?.productDetails;
  const {
    id,
    name,
    category,
    price,
    size,
    water,
    light,
    fertilizer,
    bio,
    image,
  } = productDetails;

  // eslint-disable-next-line react/no-unstable-nested-components
  const Rating = () => {
    return (
      <View style={styles.ratingContainer}>
        <RatingIcon width={14} height={14} style={styles.ratingIcon} />
        <Text style={styles.ratingText}>4.8</Text>
      </View>
    );
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const DetailsText = ({
    containerStyle,
    label,
    value,
  }: {
    containerStyle: object;
    label: string;
    value: string;
  }) => {
    return (
      <View style={containerStyle}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    );
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const Header = () => {
    return (
      <View>
        <View style={styles.topContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{category}</Text>
            <Footprint width={16} height={16} style={styles.footPrintLogo} />
            <Rating />
          </View>
          <Text style={styles.title}>{name}</Text>
          <DetailsText
            containerStyle={{marginBottom: 24}}
            label={'Price'}
            value={`$${price}`}
          />
          <DetailsText label={'Size'} value={size} />
          {/* icons */}
        </View>
        <View
          style={{
            position: 'relative',
            flexDirection: 'row',
            alignItems: 'center',
            bottom: 28,
            left: 28,
          }}>
          <Basket width={56} height={56} />
          <Favourite width={56} height={56} style={{marginLeft: 22}} />
        </View>
        <View style={styles.imageContainer}>
          <Image src={image} style={styles.image} />
        </View>
      </View>
    );
  };

  return (
    <View>
      <Header />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  topContainer: {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    backgroundColor: '#9CE5CB',
    paddingTop: 28,
    paddingHorizontal: 36,
    paddingBottom: 62,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    color: '#002140',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  footPrintLogo: {
    marginLeft: 8,
  },
  ratingContainer: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginLeft: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ratingIcon: {
    marginRight: 8,
  },
  ratingText: {
    color: '#0D986A',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  title: {
    marginBottom: 34,
    color: '#002140',
    fontFamily: 'Philosopher',
    fontSize: 38,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 48,
  },
  label: {
    color: '#002140',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    textTransform: 'capitalize',
    opacity: 0.6,
    marginBottom: 8,
  },
  value: {
    color: '#002140',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  favouriteLogo: {
    marginLeft: 22,
  },
  imageContainer: {
    position: 'absolute',
    right: -4,
    bottom: 42,
    width: Dimensions.get('window').width * 0.68,
    height: Dimensions.get('window').height * 0.24,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    overflow: 'visible',
  },
});
