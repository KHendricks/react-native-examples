import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                autoCorrect={false}
                autoCapitalize="none"
                onEndEditing={onTermSubmit}
            />
            <TouchableOpacity
                style={{ justifyContent: "center" }}
                onPress={newTerm => onTermChange("")}
            >
                <MaterialIcons style={styles.clearIcon} name="clear" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#DEDEDE",
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: "row",
        justifyContent: "center"
    },
    inputStyle: {
        flex: 1,
        margin: 7,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    },
    clearIcon: {
        fontSize: 20,
        alignSelf: "center",
        marginHorizontal: 15
    }
});
export default SearchBar;
