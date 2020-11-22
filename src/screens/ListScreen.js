import React from "react";
import { FlatList } from "react-native";
import { Text, View, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend1", age: 20 },
    { name: "friend2", age: 21 },
    { name: "friend3", age:22},
    { name: "friend4", age:23 },
    { name: "friend5", age:24 },
    { name: "friend6", age:25 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => {
        friend.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  listelementStyle: {
    marginVertical: 70,
  },
});

export default ListScreen;
