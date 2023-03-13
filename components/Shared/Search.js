import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Search({ onChange, onSubmit }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="City..."
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "90%",
    height: "8%",
    overflow: "auto",
  },

  input: {
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    fontSize: 30,
    color: "white",
    width: "100%",
  },
});
