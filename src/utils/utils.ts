export const getWeatherCodeTitle = (weathercode: number) => {
  if (weathercode < 10) {
    return 'Sunny';
  } else if (weathercode < 20) {
    return 'Clouds';
  } else if (weathercode < 29) {
    return 'Rain Light';
  } else if (weathercode < 39) {
    return 'Snow';
  } else if (weathercode < 49) {
    return 'Fog';
  } else if (weathercode < 59) {
    return 'Drizzle';
  } else if (weathercode < 69) {
    return 'Rain Heavy';
  } else if (weathercode < 79) {
    return 'Ice Pellets';
  } else if (weathercode < 89) {
    return 'Thunderstorm';
  }
};

const sunnyBG = require('../../assets/sunny.png');
const cloudsBG = require('../../assets/clouds.png');
const rainLightBG = require('../../assets/rainlight.png');
const snowBG = require('../../assets/snow.png');
const fogBG = require('../../assets/fog.png');
const drizzleBG = require('../../assets/drizzle.png');
const rainHeavyBG = require('../../assets/rainheavy.png');
const icePelletsBG = require('../../assets/icepellets.png');
const thunderstormBG = require('../../assets/thunderstorm.png');

export const getBackground = (uri: string) => {
  if (uri === 'sunny') {
    return sunnyBG;
  } else if (uri === 'clouds') {
    return cloudsBG;
  } else if (uri === 'rainlight') {
    return rainLightBG;
  } else if (uri === 'snow') {
    return snowBG;
  } else if (uri === 'fog') {
    return fogBG;
  } else if (uri === 'drizzle') {
    return drizzleBG;
  } else if (uri === 'rainheavy') {
    return rainHeavyBG;
  } else if (uri === 'icepellets') {
    return icePelletsBG;
  } else if (uri === 'thunderstorm') {
    return thunderstormBG;
  }
};

export const getTimeFromDate = (dateString: Date) => {
  const date = new Date(dateString);
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
};
