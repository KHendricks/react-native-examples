import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/Yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get("/search", {
            params: { limit: 50, term: term, location: "orlando" }
        });
        setResults(response.data.businesses);
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi()}
            />
            <Text>We have found {results.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
