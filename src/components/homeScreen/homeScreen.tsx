import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TextInput placeholder="Enter your city" style={styles.textInput} />
      <TouchableOpacity style={styles.touchableOpacity}>
        <Text style={styles.touchableOpacityText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};
