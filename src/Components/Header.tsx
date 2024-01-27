import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import AppLogo from '../Assets/Logo.svg';
import Menu from '../Assets/Menu.svg';
import Notification from '../Assets/Notification.svg';

const Header = ({isProductDetails}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width - 40,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <AppLogo />
        <Text
          style={{
            marginLeft: 14,
            fontFamily: 'Philosopher',
            fontSize: 20,
            fontWeight: '700',
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}>
          Plantify
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 'auto',
        }}>
        <Notification />
        <Menu style={{marginLeft: 18}} />
      </View>
    </View>
  );
};

export default Header;
