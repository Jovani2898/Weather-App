import {useEffect, useState} from 'react';

export const useWeather = () => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [data, setdata] = useState<{
    name: string;
    temperature: string;
    sunrise: string;
    sunset: string;
    weathercode: string;
  }>();

  useEffect(() => {
    if (city.length > 0) {
      const fetchData = async () => {
        setLoading(true);
        setError(false);
        try {
          const geoDataResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
          )
            .then(response => response.json())
            .then(response => response.results);

          const {latitude, longitude} = geoDataResponse[0];
          const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=sunrise,sunset&timezone=Asia/Tbilisi`,
          ).then(response => response.json());
          setdata({
            name: geoDataResponse[0].name,
            temperature: weatherResponse.current_weather.temperature,
            sunrise: weatherResponse.daily.sunrise[0],
            sunset: weatherResponse.daily.sunset[0],
            weathercode: weatherResponse.current_weather.weathercode,
          });
        } catch (e) {
          setError(true);
        }
        setLoading(false);
      };
      fetchData();
    }
  }, [city]);
  return {
    setCity,
    data,
    error,
    loading,
  };
};
