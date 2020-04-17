import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import CounterScreen from "./src/screens/CounterScreen";

// Redux imports
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.viewContainer}>
                <CounterScreen />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: "#282930",
        alignItems: "center",
        justifyContent: "center",
    },
});
