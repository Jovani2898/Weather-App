import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const Navigation = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          onPress('home');
        }}>
        <Text style={styles.touchableOpacityText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => {
          onPress('favourites');
        }}>
        <Text style={styles.touchableOpacityText}>Favourites</Text>
      </TouchableOpacity>
    </View>
  );
};
