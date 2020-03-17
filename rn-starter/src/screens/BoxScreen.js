import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.boxOne}></View>
            <View style={styles.boxTwo}></View>
            <View style={styles.boxThreeV2}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: "black"

        // Changes how the children inside the object will be displayed
        //flexDirection: "row" // row, column [default]
        //alignItems: "center", // center, flex-end, flex-start, stretch [default]
        //justifyContent: "center" // space-between, center, flex-end, flex-start, space-around
    },
    boxOne: {
        width: 50,
        height: 50,
        backgroundColor: "red"
    },
    boxTwo: {
        width: 50,
        height: 50,
        alignSelf: "flex-end",
        backgroundColor: "purple",
        position: "absolute"
    },
    boxThree: {
        width: 50,
        height: 50,
        alignSelf: "center",
        backgroundColor: "green"
    },
    boxThreeV2: {
        width: 50,
        height: 50,
        alignSelf: "center",
        backgroundColor: "yellow",
        marginHorizontal: 50
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: "red",
        flex: 1
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: "red",
        flex: 1

        // position: absolute,
        // top: 0,
        // right: 0,
        // bottom: 0,
        // left: 0
        // === (react shortcut)
        // ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: "red",
        flex: 1,
        alignSelf: "stretch" // Overrides parents alignItems
    }
});

export default BoxScreen;
