import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CalculatorScreen from "./src/screens/CalculatorScreen";
// Redux imports
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <CalculatorScreen />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2e2e2e",
    },
});
