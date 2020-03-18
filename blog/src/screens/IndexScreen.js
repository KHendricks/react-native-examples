import React, { useContext } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    TouchableOpacity
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View style={{ flex: 1 }}>
            <Button title="Add Post" onPress={() => addBlogPost()} />
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.titleStyle}>{item.title}</Text>
                            <TouchableOpacity
                                onPress={() => deleteBlogPost(item.id)}
                            >
                                <Feather
                                    name="trash"
                                    style={styles.trashIconStyle}
                                />
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderColor: "gray"
    },
    trashIconStyle: { fontSize: 30 },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default IndexScreen;
