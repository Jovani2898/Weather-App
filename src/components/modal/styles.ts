import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 200,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderTopWidth: 1,
    paddingTop: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  buttonClose: {
    marginRight: 24,
    padding: 16,
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: 'center',
  },
  buttonFavourite: {
    marginRight: 24,
    padding: 16,
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: 'center',
  },
  description: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  image: {
    width: 32,
    height: 32,
  },
});
