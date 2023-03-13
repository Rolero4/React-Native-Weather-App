import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

export default function Calendar() {
  var options = {
    year: "2-digit",
    month: "2-digit",
    day: "numeric",
  };

  const [date, setDate] = useState(new Date());

  function refreshDate() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshDate, 10000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{date.toLocaleDateString("en", options)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "30%",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
