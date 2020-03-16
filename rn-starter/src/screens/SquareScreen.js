import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +COLOR_INCREMENT, -COLOR_INCREMENT
        switch (color) {
            case "red":
                if (red + change > 255 || red + change < 0) {
                    return;
                } else {
                    setRed(red + change);
                }
                return;
            case "blue":
                if (blue + change > 255 || blue + change < 0) {
                    return;
                } else {
                    setBlue(blue + change);
                }
                return;
            case "green":
                if (green + change > 255 || green + change < 0) {
                    return;
                } else {
                    setGreen(green + change);
                }
                return;
            default:
                return;
        }
    };
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor("red", COLOR_INCREMENT)}
                onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => setColor("blue", COLOR_INCREMENT)}
                onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
                color="Blue"
            />
            <ColorCounter
                onIncrease={() => setColor("green", COLOR_INCREMENT)}
                onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
                color="Green"
            />

            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
