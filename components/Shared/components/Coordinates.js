import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Coordinates({ lat, lon }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        longitude: <Text style={styles.textBold}>{lon}</Text>
      </Text>
      <Text style={styles.text}>
        latitude: <Text style={styles.textBold}>{lat}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    width: "100%",
    height: "5%",
    alignItems: "flex-start",
    flexDirection: "row",
    width: "90%",
    paddingHorizontal: 5,
  },

  text: {
    color: "white",
    width: "50%",
    fontSize: 18,
  },

  textBold: {
    color: "white",
    width: "50%",
    fontSize: 18,
    fontWeight: "bold",
  },
});
