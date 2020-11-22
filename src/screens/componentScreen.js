import React from "react";
import { Text, StyleSheet, View } from "react-native";

const another = "Another text";
const name = "ahmed";
const componentScreen = () => {
  return (
    <View>
      <Text style={styles.grettings}>Getting started with react native !</Text>
      <Text style={styles.name}> my name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  grettings: {
    fontSize: 45,
  },
  name: {
    fontSize: 20,
  },
});

export default componentScreen;
