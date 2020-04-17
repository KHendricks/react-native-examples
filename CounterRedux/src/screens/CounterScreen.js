import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Redux imports
import { connect } from "react-redux";

const CalculatorScreen = (props) => {
    const incrementCount = () => {
        props.count++;
    };

    return (
        <View style={styles.viewContainer}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={props.increaseCounter}
            >
                <Text style={styles.textStyle}>INCREASE</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>{props.counter}</Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={props.decreaseCounter}
            >
                <Text style={styles.textStyle}>DECREASE</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={props.resetCounter}
            >
                <Text style={styles.textStyle}>RESET</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer: { alignItems: "center" },
    textStyle: {
        fontSize: 20,
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    buttonStyle: {
        margin: 20,
        backgroundColor: "#a1aebc",
        borderRadius: 12,
        width: 150,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
});

// This grabs the data out of the overall state and stores it
// locally to the prop
const mapStateToProps = (state) => {
    return { counter: state.counter };
};

// This will dispatch a type to the reducer in the store.
// Make sure the reducer in store.js has a case to handle
// the type.
const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch({ type: "INCREASE_COUNTER" }),
        decreaseCounter: () => dispatch({ type: "DECREASE_COUNTER" }),
        resetCounter: () => dispatch({ type: "RESET_COUNTER" }),
    };
};

// This is the export default that is needed to connect this component
// to the redux store.
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorScreen);
