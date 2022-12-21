import React, {useContext, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// import {sharedContext} from '../../contexts/sharedContext';
// import {store} from '../../redux/store';
// import {SharedTypes} from '../../redux/types/sharedTypes';
import {styles} from './styles';
import {UPDATE_NAVIGATION_HEIGHT_ACTION} from '../../redux/actions/sharedActions';
import {useDispatch} from 'react-redux';

export const Navigation = ({onPress}) => {
  // const {dispatch} = store;
  const dispatch = useDispatch();

  // const {setNavigationHeight} = useContext(sharedContext);

  return (
    <View
      style={styles.container}
      onLayout={e => {
        const {height} = e.nativeEvent.layout;
        dispatch(UPDATE_NAVIGATION_HEIGHT_ACTION(height));
        // dispatch({
        //   type: SharedTypes.UPDATE_NAVIGATION_HEIGHT,
        //   payload: {navigationHeight: height},
        // });
        // setNavigationHeight(height);
      }}>
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
