import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

export default function Clock() {
  const [clock, setClock] = useState(new Date());

  function refreshClock() {
    setClock(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {clock.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "40%",
    alignItems: "center",
  },
  text: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
});
