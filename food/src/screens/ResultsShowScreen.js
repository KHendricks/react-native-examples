import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/Yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam("id");

    console.log(navigation);
    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.titleStyle}>
                {result.name} [{result.price}]
            </Text>

            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: item }}
                        />
                    );
                }}
            />
            <Text style={styles.ratingStyle}> Stars: {result.rating}/5</Text>

            <Text style={styles.addressStyle}>
                {result.location.address1}{" "}
                {result.location.address2 ? result.location.address2 : null}
            </Text>
            <Text style={styles.addressStyle}>
                {result.location.city} {result.location.state}{" "}
                {result.location.zip_code}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 27,
        margin: 20
    },
    imageStyle: {
        height: 200,
        width: 300,
        marginHorizontal: 10,
        marginBottom: 20
    },
    addressStyle: {
        fontSize: 20,
        alignSelf: "center",
        margin: 1
    },
    ratingStyle: {
        margin: 15,
        alignSelf: "center",
        fontSize: 18
    }
});

export default ResultsShowScreen;
