import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";
const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="forest"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetails
        title="beach"
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetails
        title="motain"
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
