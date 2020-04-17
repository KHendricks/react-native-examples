import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

const CalculatorButton = (props) => {
    // This is to hide the 2nd button on the last row
    // Probably a better way to do this
    if (props.disableButton === false) {
        return (
            <View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={(value) => props.appendCalculator(props.value)}
                >
                    <Text style={styles.testStyle}>{props.value}</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return <View style={styles.placeholderButtonStyle}></View>;
    }
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "#000",
        width: 80,
        height: 80,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    placeholderButtonStyle: {
        backgroundColor: "transparent",
        width: 80,
        height: 80,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    testStyle: {
        fontSize: 60,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
});

// This grabs the data out of the overall state and stores it
// locally to the prop
const mapStateToProps = (state) => {
    return { calculatorStack: state.calculatorStack };
};

// This will dispatch a type to the reducer in the store.
// Make sure the reducer in store.js has a case to handle
// the type.
const mapDispatchToProps = (dispatch) => {
    return {
        appendCalculator: (value) => {
            let action = "";
            if (value === "=") {
                action = "EQUALS";
            } else if (value === "+") {
                action = "ADD";
            } else if (value === "-") {
                action = "MINUS";
            } else if (value === "x") {
                action = "MULTIPLY";
            } else if (value === "÷") {
                action = "DIVIDE";
            } else if (value === "±") {
                action = "INVERT";
            } else if (value === "%") {
                action = "PERCENTAGE";
            } else if (value === "C") {
                action = "CLEAR";
            } else {
                action = "APPEND";
            }

            dispatch({ type: action, value: value });
        },
    };
};

// This is the export default that is needed to connect this component
// to the redux store.
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorButton);
