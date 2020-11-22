import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput
        autoCapitalize="none"
        value={name}
        style={{ height: 40, borderColor: "gray", borderWidth: 1, margin: 10 }}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
      />
      <Text > Text : {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TextScreen;
