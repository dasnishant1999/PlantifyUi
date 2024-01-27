import React from 'react';
import {View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';

import Product from '../Components/Product';
import {useAppDispatch, useAppSelector} from '../Redux/store';
import {GET_PRODUCTS} from '../Redux/messageSlice';

const Home = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state?.Message?.products);
  const loader = useAppSelector(state => state?.Message?.loader);

  React.useEffect(() => {
    dispatch(GET_PRODUCTS());
  }, []);

  const renderItem = ({item, index}) => {
    return <Product product={item} key={index.toString()} />;
  };

  const ItemSeparatorComponent = () => <View style={styles.seperator} />;

  return (
    <View>
      {loader ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={renderItem}
          data={products}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  seperator: {
    backgroundColor: '#fff',
    height: 54,
  },
});
