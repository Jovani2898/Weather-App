import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  textInput: {
    borderWidth: 1,
    marginVertical: 15,
    backgroundColor: '#D2DAFF',
  },
  touchableOpacity: {
    padding: 5,
  },
  touchableOpacityText: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#FEFCF3',
    paddingVertical: 5,
    marginHorizontal: 100,
    color: '#000000',
  },
  errorContainer: {
    backgroundColor: '#393E46',
    paddingVertical: 5,
    marginVertical: 100,
    marginHorizontal: 100,
    alignItems: 'center',
  },
  errorText: {
    textAlign: 'center',
    color: '#CF0A0A',
  },
  loadingContainer: {
    marginVertical: 70,
    marginHorizontal: 70,
  },
  loadingText: {
    color: '#1AA6B7',
    textAlign: 'center',
  },
});
