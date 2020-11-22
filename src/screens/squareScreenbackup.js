import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const squareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const COLOR_INCREMENT = 15;
  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => {
          setRed(red + COLOR_INCREMENT);
          console.log(red);
        }}
        onDescrease={() => {
          setRed(red - COLOR_INCREMENT);
          console.log(red);
        }}
      />
      <ColorCounter
        color="green"
        onIncrease={() => {
          setGreen(green + COLOR_INCREMENT);
          console.log(green);
        }}
        onDescrease={() => {
          setGreen(green - COLOR_INCREMENT);
          console.log(green);
        }}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => {
          setBlue(blue + COLOR_INCREMENT);
          console.log(blue);
        }}
        onDescrease={() => {
          setBlue(blue - COLOR_INCREMENT);
          console.log(blue);
        }}
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: "rgb(" + red + "," + green + "," + blue + ")",
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default squareScreen;
