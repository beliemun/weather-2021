import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const WeatherOption = {
    Clear: {
        gradient: ['#48dbfb', '#2980b9'],
        icon: 'ios-sunny-sharp',
        message: 'Clear :) Have a nice day!'
    },
    Rain: {
        gradient: ['#4c669f', '#3b5998', '#192f6a'],
        icon: 'rainy',
        message: 'Don`t forget take your umbrella!'
    },
    Thunderstorm: {
        gradient: ['#ff9ff3', '#f368e0'],
        icon: 'thunderstorm',
        message: 'Be careful your head!'
    },
    Snow: {
        gradient: ['#c8d6e5', '#8395a7'],
        icon: 'ios-snow',
        message: 'Do you want to build a snow man~'
    },
    Clouds: {
        gradient: ['#95a5a6', '#606060'],
        icon: 'cloud',
        message: 'Next day will be better :)'
    },
    Fog: {
        gradient: ['#95a5a6', '#606060'],
        icon: 'Fog',
        message: 'I don`t like Fog!'
    }
}

const Weather = ({ temp, condition }) => {
    return (
        <LinearGradient
            colors={WeatherOption[condition].gradient}
            style={styles.viewContainer}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.headerContainer}>
                <Ionicons name={WeatherOption[condition].icon} size={100} color='white' />
                <Text style={styles.headerText}>{Math.round(temp)} ℃</Text>
            </View>
            <View style={styles.footerContainter}>
                <Text style={styles.footerText}>{WeatherOption[condition].message}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.Proptypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clouds",
        "Clear",
        "Rain",
    ]).isRequired,
}

export default Weather;

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 50,
        marginTop: 20,
    },
    footerContainter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: 'white',
        fontSize: 24
    }
});