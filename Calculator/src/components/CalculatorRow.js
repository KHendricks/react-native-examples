import React from "react";
import { View, StyleSheet } from "react-native";
import CalculatorButton from "./CalculatorButton";

const CalculatorRow = (props) => {
    let disableButton = false;
    if (props.values[1] === "") {
        disableButton = true;
    }

    return (
        <View style={styles.viewStyle}>
            <CalculatorButton value={props.values[0]} disableButton={false} />
            <CalculatorButton
                value={props.values[1]}
                disableButton={disableButton}
            />
            <CalculatorButton value={props.values[2]} disableButton={false} />
            <CalculatorButton value={props.values[3]} disableButton={false} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default CalculatorRow;
