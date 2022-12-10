export const getWeatherCodeTitle = (weathercode: number) => {
  if (weathercode < 20) {
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

export const getTimeFromDate = (dateString: Date) => {
  const date = new Date(dateString);
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
};
