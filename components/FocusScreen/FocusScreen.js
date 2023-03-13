import { View, Text, StyleSheet } from "react-native";
import WeatherIcon from "../Shared/WeatherIcon";
import Row from "./focusComponents/Row";

export default function FocusScreen({ weather }) {
  return (
    <View style={styles.container}>
      <WeatherIcon icon={weather.icon}></WeatherIcon>
      <View style={styles.weatherContainer}>
        <Row name="Temperature" value={weather.temperature}></Row>
        <Row name="Pressure" value={weather.pressure}></Row>
        <Row name="Sunrise" value={weather.sunrise}></Row>
        <Row name="Sunset" value={weather.sunset}></Row>
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

  weatherContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: "60%",
    marginHorizontal: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 0,
    borderColor: "white",
    backgroundColor: "#CC9752",
  },
});
