import React from "react";
import { Button } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const colorCounter = ({ color, onIncrease, onDescrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title="+"
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        title="-"
        onPress={() => {
          onDescrease();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default colorCounter;
