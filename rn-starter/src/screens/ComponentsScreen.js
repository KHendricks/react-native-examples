import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = "Kyle Hendricks";

    return (
        <View>
            <Text style={styles.textStyleA}>
                Getting started with react native!
            </Text>
            <Text style={styles.textStyleB}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyleA: {
        fontSize: 45
    },
    textStyleB: {
        fontSize: 20
    }
});

export default ComponentsScreen;
