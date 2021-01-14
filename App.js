import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import Weather from './Wheather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "df30eb65f0771a109071fa0f444eafa2";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWhether = async (latitude, longitude) => {
    try {
      const {
        data: {
          main: { temp },
          weather
        },
      } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      this.setState({ isLoading: false, temp, condition: weather[0].main });
    } catch (error) {
      console.log(error);
    }
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWhether(latitude, longitude);
    } catch (error) {
      Alert.alert("Can`t check your location.", "You need to allow your location permission");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={temp} condition={condition} />;
  }
}