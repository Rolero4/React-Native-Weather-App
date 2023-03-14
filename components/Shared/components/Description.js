import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Description({ info }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F3B5F",
    width: "90%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginVertical: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
  },

  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#CC9752",
  },
});
