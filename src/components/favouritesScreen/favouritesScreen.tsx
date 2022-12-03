import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';

const MOCK = [
  {
    name: 'Batumi',
    temperature: '+15',
  },
  {
    name: 'Tbilisi',
    temperature: '+15',
  },
  {
    name: 'Kutaisi',
    temperature: '+15',
  },
  {
    name: 'Poti',
    temperature: '+15',
  },
  {
    name: 'Bakuriani',
    temperature: '+15',
  },
  {
    name: 'Kaxeti',
    temperature: '+15',
  },
];

export const Favourites = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Favourites Screen</Text>
      <FlatList
        data={MOCK}
        style={styles.listItem}
        renderItem={({item}: {item: any}) => (
          <View>
            <Text style={styles.listItemRegion}>Region: {item.name}</Text>
            <Text style={styles.listItemTemperature}>
              Temperature: {item.temperature}
            </Text>
          </View>
        )}
      />
    </ScrollView>
  );
};
