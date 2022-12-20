import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#0E5E6F',
  },
  touchableOpacity: {borderWidth: 1, flex: 1, padding: 8},
  touchableOpacityText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
});
