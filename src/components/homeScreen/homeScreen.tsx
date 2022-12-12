import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useWeather} from '../../hooks/useWeather/useWeather';
import {styles} from './styles';
import {Modal} from '../modal/modal';
import {getWeatherCodeTitle} from '../../utils/utils';

export const Home = ({changeBackground}) => {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const {setCity, data, error, loading} = useWeather();

  const onInputChange = e => {
    setSearch(e.nativeEvent.text);
  };

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

  useEffect(() => {
    if (data) {
      setShowModal(true);
      const weatherString = getWeatherCodeTitle(
        parseInt(data.weathercode, 10),
      )?.toLowerCase();
      changeBackground(weatherString);
    }
  }, [data, changeBackground]);
  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={search}
          onChange={onInputChange}
          placeholder="Enter your city"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.touchableOpacity} onPress={onSearch}>
          <Text style={styles.touchableOpacityText}>Search</Text>
        </TouchableOpacity>
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              some error occured, while fetching api
            </Text>
          </View>
        )}
        {loading && (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>
              fetching weather for {search}...
            </Text>
          </View>
        )}
      </View>
      {showModal ? (
        <Modal onClose={closeModal} data={data} onRemove={() => {}} />
      ) : null}
    </>
  );
};
