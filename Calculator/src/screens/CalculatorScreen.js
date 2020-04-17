import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CalculatorValue from "../components/CalculatorValue";
import CalculatorRow from "../components/CalculatorRow";

const CalculatorScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <CalculatorValue />
            <CalculatorRow values={["C", "±", "%", "÷"]} />
            <CalculatorRow values={["7", "8", "9", "x"]} />
            <CalculatorRow values={["4", "5", "6", "-"]} />
            <CalculatorRow values={["1", "2", "3", "+"]} />
            <CalculatorRow values={["0", "", ".", "="]} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: "space-around",
    },
});

export default CalculatorScreen;
