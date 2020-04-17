import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Constants from "expo-constants";

const CalculatorValue = (props) => {
    let displayString = props.calculatorStack;
    if (props.calculatorStack === "") {
        displayString = props.prevStack;
    }
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.testStyle}>{displayString}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: "#717171",
        alignItems: "flex-end",
        height: 100,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 15,
        justifyContent: "center",
        borderRadius: 12,
    },
    testStyle: {
        marginRight: 3,
        fontSize: 40,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
});

// This grabs the data out of the overall state and stores it
// locally to the prop
const mapStateToProps = (state) => {
    return {
        calculatorStack: state.calculatorStack,
        prevStack: state.prevStack,
    };
};

// This is the export default that is needed to connect this component
// to the redux store.
export default connect(mapStateToProps)(CalculatorValue);
