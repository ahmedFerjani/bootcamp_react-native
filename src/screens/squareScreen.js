import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      if (state.red + action.payload > 255 || state.red + action.payload < 0) {
        return state;
      }
      return { ...state, red: state.red + action.payload };
    case "change_green":
      if (
        state.green + action.payload > 255 ||
        state.green + action.payload < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.payload };
    case "change_blue":
      if (
        state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
      ) {
        return state;
      }
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const squareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const COLOR_INCREMENT = 15;
  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDescrease={() => {
          dispatch({ type: "change_red", payload: -COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color="green"
        onIncrease={() => {
          dispatch({ type: "change_green", payload: COLOR_INCREMENT });
        }}
        onDescrease={() => {
          dispatch({ type: "change_green", payload: -COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => {
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT });
          console.log(state);
        }}
        onDescrease={() => {
          dispatch({ type: "change_blue", payload: -COLOR_INCREMENT });
        }}
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor:
            "rgb(" + state.red + "," + state.green + "," + state.blue + ")",
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default squareScreen;
