import React, {useState, useEffect} from 'react';
import {
  Image,
  Modal as RNModal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useStorage} from '../../hooks/useStorage/useStorage';
import {getWeatherCodeTitle, getTimeFromDate} from '../../utils/utils';
import {styles} from './styles';

export const Modal = ({onClose, data, onRemove}) => {
  const {setFavourites, existInFavourites} = useStorage();
  const [exist, setExist] = useState(false);

  const triggerFavorites = async () => {
    if (exist) {
      await onRemove(data);
      const result = await existInFavourites(data);
      setExist(result);
    } else {
      await setFavourites(data);
      const result = await existInFavourites(data);
      setExist(result);
    }
  };

  useEffect(() => {
    const checkIfExist = async () => {
      const result = await existInFavourites(data);
      setExist(result);
    };

    checkIfExist();
  }, [data, existInFavourites]);

  return (
    <RNModal visible={true} presentationStyle="pageSheet" animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={triggerFavorites}
            style={styles.buttonFavourite}>
            {exist ? (
              <Image
                source={require('../../../assets/favorites-exists.jpg')}
                style={styles.image}
              />
            ) : (
              <Image
                source={require('../../../assets/favorites-noexist.png')}
                style={styles.image}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.buttonClose}>
            <Image
              source={require('../../../assets/close.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.description}>
          <Text style={styles.text}>Region: {data?.name}</Text>
          <Text style={styles.text}>
            Sunrise: {data?.sunrise ? getTimeFromDate(data?.sunrise) : ''}
          </Text>
          <Text style={styles.text}>
            Sunset: {data?.sunset ? getTimeFromDate(data?.sunset) : ''}
          </Text>
          <Text style={styles.text}>Temperature: {data?.temperature}</Text>
          <Text style={styles.text}>
            {data?.weathercode !== null
              ? getWeatherCodeTitle(parseInt(data.weathercode, 10))
              : ''}
          </Text>
        </View>
      </View>
    </RNModal>
  );
};
