import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "df30eb65f0771a109071fa0f444eafa2";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWhether = async (latitude, longitude) => {
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      console.log(data);
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
      console.log(latitude, longitude);
      this.getWhether(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can`t check your location.", "You need to allow your location permission");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}