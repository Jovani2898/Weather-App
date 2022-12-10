import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStorage = () => {
  const getFavourites = async () => {
    const favourites = await AsyncStorage.getItem('favourites');
    if (!favourites) {
      return []; // если нету favourites то мы выходим с функции и нам возвращается пустой массив
    }
    // если есть favourites
    const data = JSON.parse(favourites);
    return data;
  };

  const setFavourites = async favouritesItem => {
    let data;
    const favourites = await AsyncStorage.getItem('favourites');
    if (!favourites) {
      data = [favouritesItem];
      await AsyncStorage.setItem('favourites', JSON.stringify(data));
    } else {
      data = JSON.parse(favourites);
      //мы проверяем есть ли в массиве такой же фейворит чтобы он не повторялся два раза
      const exists = data.find(item => item.name === favouritesItem.name);
      // если не нашёл такой же Элемент в фаворит итеме такой же как переданный функции, тогда добавить его в массив
      if (!exists) {
        data.push(favouritesItem);
        await AsyncStorage.setItem('favourites', JSON.stringify(data));
      }
    }
  };

  const existInFavourites = async favouritesItem => {
    const favourites = await AsyncStorage.getItem('favourites');
    if (!favourites) {
      return false;
    }
    const data = JSON.parse(favourites);
    const exist = data.find(item => item.name === favouritesItem.name);
    return !!exist;
  };

  const removeFromFavourites = async favouritesItem => {
    const favourites = await AsyncStorage.getItem('favourites');
    if (!favourites) {
      return;
    }
    let data = JSON.parse(favourites);
    data = data.filter(item => item.name !== favouritesItem.name);
    await AsyncStorage.setItem('favourites', JSON.stringify(data));
  };

  return {
    getFavourites,
    setFavourites,
    existInFavourites,
    removeFromFavourites,
  };
};
