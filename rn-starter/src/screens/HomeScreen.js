import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Button,
    TouchableOpacity,
    ShadowPropTypesIOS
} from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>World</Text>
            <Button
                title="Components"
                onPress={() => navigation.navigate("Components")}
            />
            <Button title="Lists" onPress={() => navigation.navigate("List")} />
            <Button
                title="Image"
                onPress={() => navigation.navigate("Image")}
            />
            <Button
                title="Counter"
                onPress={() => navigation.navigate("Counter")}
            />
            <Button
                title="Color"
                onPress={() => navigation.navigate("Color")}
            />
            <Button
                title="Square"
                onPress={() => navigation.navigate("Square")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
