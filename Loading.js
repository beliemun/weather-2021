import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Loading = () => {
    return (
        <View style={styles.viewContianer}>
            <Text style={styles.text}>Getting the whether..</Text>
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    viewContianer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#2c2c2c',
        fontSize: 20,
        fontWeight: 'bold'
    }
})