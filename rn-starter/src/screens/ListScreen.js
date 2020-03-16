import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends =[
        { name: "Friend #1", age: 20},
        { name: "Friend #2", age: 29},
        { name: "Friend #3", age: 15},
        { name: "Friend #4", age: 35},
        { name: "Friend #5", age: 19},
        { name: "Friend #6", age: 33},
        { name: "Friend #7", age: 40},
    ];

    return(
        <FlatList
            keyExtractor={(friend) => friend.name }
            data={friends} 
            renderItem={({item}) => {
                return (
                    <Text style={styles.textStyle}>
                        {item.name} - Age {item.age}
                    </Text>
                )
            }}>
        </FlatList>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;