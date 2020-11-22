import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { ...state, count: state.count + action.payload };
    }
    case "descrement": {
      return { ...state, count: state.count - action.payload };
    }
    default:
      return state;
  }
};
const CounterScreen = (props) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button
        title="+"
        onPress={() => {
          dispatch({ type: "increment", payload: 10 });
        }}
      />
      <Button
        title="-"
        onPress={() => {
          dispatch({ type: "decrement", payload: 10 });
        }}
      />
      <Text>Current : {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
