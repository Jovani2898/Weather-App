import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useStorage} from '../../hooks/useStorage/useStorage';
import {styles} from './styles';
import {Modal} from '../modal/modal';

export const Favourites = () => {
  const {getFavourites, removeFromFavourites} = useStorage();
  const [favourites, setFavourites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const loadFavourites = async () => {
      const data = await getFavourites();
      setFavourites(data);
    };
    loadFavourites();
  }, [getFavourites]);

  const closeModal = () => {
    setShowModal(false);
  };

  const removeFavourites = async favouritesItem => {
    await removeFromFavourites(favouritesItem); //удаляем фавориты
    const data = await getFavourites(); // а тут обновили и сохранили
    setFavourites(data);
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <FlatList
          ListEmptyComponent={() => <Text>No Data</Text>}
          data={favourites}
          renderItem={({item}: {item: favourites}) => (
            <TouchableOpacity
              style={styles.listItem}
              key={item.name}
              onPress={() => {
                setSelectedItem(item);
                setShowModal(true);
              }}>
              <Text style={styles.listItemRegion}>Region: {item.name}</Text>
              <Text style={styles.listItemTemperature}>
                Temperature: {item.temperature}
              </Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
      {showModal ? (
        <Modal
          data={selectedItem}
          onClose={closeModal}
          onRemove={removeFavourites}
        />
      ) : null}
    </>
  );
};
