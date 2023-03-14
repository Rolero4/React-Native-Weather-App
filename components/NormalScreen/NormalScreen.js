import { View, Text, StyleSheet } from "react-native";
import Tile from "./normalComponents/Tile";
import WeatherIcon from "../Shared/WeatherIcon";

export default function NormalScreen({ weather }) {
  return (
    <View style={styles.container}>
      <View style={styles.tileContainer}>
        <Tile icon={0} value={weather.temperature}></Tile>
        <Tile icon={1} value={weather.pressure}></Tile>
      </View>
      <View style={styles.tileContainer}>
        <Tile icon={2} value={weather.sunrise}></Tile>
        <Tile icon={3} value={weather.sunset}></Tile>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },

  tileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
});
