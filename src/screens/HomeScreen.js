import React from "react";
import { Button } from "react-native";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Compoenent screen page"
        onPress={() => navigation.navigate("Component")}
      />
      <Text style={styles.text}>ahmed</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ListScreen")}>
        <Text>list page</Text>
      </TouchableOpacity>
      <Button
        title="Image screen"
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <Button
        title="Counter screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Color screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Square screen"
        onPress={() => navigation.navigate("Square")}
      />
      <Button title="Text screen" onPress={() => navigation.navigate("Text")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
