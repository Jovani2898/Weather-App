import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {useStorage} from '../../hooks/useStorage/useStorage';
import {styles} from './styles';
import {Modal} from '../modal/modal';
import {sharedContext} from '../../contexts/sharedContext';

const generateArray = data => {
  const res = [];
  for (let i = 0; i < [1, 2, 3, 4, 5].length; i++) {
    res.push(...data);
  }
  return res;
};

export const Favourites = () => {
  const window = Dimensions.get('window');
  const statusBarHeight = StatusBar.currentHeight || 0;

  const {getFavourites, removeFromFavourites} = useStorage();
  const [favourites, setFavourites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const {navigationHeight} = useContext(sharedContext);

  useEffect(() => {
    const loadFavourites = async () => {
      let data = await getFavourites();
      data = generateArray(data);
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
      {/* <ScrollView style={styles.container}> - Don't use with flat list, flat list has own scroll functionality  */}
      <FlatList
        style={[
          styles.container,
          {
            maxHeight: window.height - navigationHeight - statusBarHeight,
          },
        ]}
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
      {/* </ScrollView> */}
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
