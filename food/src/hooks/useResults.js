import React, { useEffect, useState } from "react";
import yelp from "../api/Yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "2585 Revolution St, Melbourne, FL"
                }
            });
            setResults(response.data.businesses);
            setErrorMessage("");
        } catch (err) {
            setErrorMessage("Something went wrong");
        }
    };

    // Call searchApi one time for default
    // useEffect allows the change to only occur one time
    useEffect(() => {
        searchApi("Food");
    }, []);

    return [searchApi, results, errorMessage];
};
