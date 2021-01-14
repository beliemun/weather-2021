import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const getColorAndText = (condition) => {
    let colors, text;


    switch (condition) {
        case 'Clear':
            colors = ['#48dbfb', '#2980b9'];
            text = 'Clear :) Have a nice day!'
            break;
        case 'Rain':
            colors = ['#4c669f', '#3b5998', '#192f6a'];
            text = 'Don`t forget take your umbrella!'
            break;
        case 'Thunderstorm':
            colors = ['#ff9ff3', '#f368e0']
            text = 'Be careful your head!'
            break;
        case 'Snow':
            colors = ['#c8d6e5', '#8395a7']
            text = 'Do you want to build a snow man~'
            break;
        case 'Clouds':
            colors = ['#95a5a6', '#606060']
            text = 'Next day will be better :)'
            break;
        default:
            colors = ['#48dbfb', '#2980b9'];
            text = 'Take care!'
    }

    return { colors, text };
}

const WeatherIcon = ({ condition }) => {
    console.log(condition);
    switch (condition) {
        case 'Clear':
            return <Ionicons name="ios-sunny-sharp" size={100} color="white" />
        case 'Rain':
            return <Ionicons name="rainy" size={100} color="white" />
        case 'Thunderstorm':
            return <Ionicons name="thunderstorm" size={100} color="white" />
        case 'Snow':
            return <Ionicons name="ios-snow" size={100} color="white" />
        case 'Clouds':
            return <Ionicons name="cloud" size={100} color="white" />
        default:
            return <Ionicons name="question" size={100} color="white" />
    }
}

const Weather = ({ temp, condition }) => {
    const { colors, text } = getColorAndText(condition);
    return (
        <LinearGradient
            colors={colors}
            style={styles.viewContainer}>
            <View style={styles.headerContainer}>
                <WeatherIcon condition={condition} />
                <Text style={styles.headerText}>{Math.round(temp)} ℃</Text>
            </View>
            <View style={styles.footerContainter}>
                <Text style={styles.footerText}>{text}</Text>
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