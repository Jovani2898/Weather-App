import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useWeather} from '../../hooks/useWeather/useWeather';
import {styles} from './styles';
import {Modal} from '../modal/modal';

export const Home = () => {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const {setCity, data} = useWeather();

  const onSearch = () => {
    setCity(search);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (data) {
      setShowModal(true);
    }
  }, [data]);
  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={search}
          onChange={e => {
            const value = e.nativeEvent.text;
            setSearch(value);
          }}
          placeholder="Enter your city"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.touchableOpacity} onPress={onSearch}>
          <Text style={styles.touchableOpacityText}>Search</Text>
        </TouchableOpacity>
      </View>
      {showModal ? (
        <Modal onClose={closeModal} data={data} onRemove={() => {}} />
      ) : null}
    </>
  );
};
