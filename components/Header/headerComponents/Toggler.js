import { View, Text, Switch, StyleSheet } from "react-native";

export default function Toggler({ callback, state }) {
  return (
    <View style={styles.container}>
      {!state ? (
        <Text style={styles.focus}>Focus Mode</Text>
      ) : (
        <Text style={styles.simple}>Simple Mode</Text>
      )}
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

  focus: {
    color: "green",
    margin: 5,
  },

  simple: {
    color: "lightgreen",
    margin: 5,
  },
});
