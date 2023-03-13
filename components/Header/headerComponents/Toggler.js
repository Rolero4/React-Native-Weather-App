import { View, Switch, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Toggler({ callback, state }) {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={state ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={callback}
        value={state}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "30%",
    alignItems: "center",
  },
});
