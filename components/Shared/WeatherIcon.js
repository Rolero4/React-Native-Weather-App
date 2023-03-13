import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function WeatherIcon({ icon }) {
  const names = [
    "01d",
    "01n",
    "02d",
    "02d",
    "03d",
    "03d",
    "04d",
    "04n",
    "09d",
    "09d",
    "10d",
    "10d",
    "11d",
    "11n",
    "13d",
    "13n",
    "50d",
    "50n",
    "unknown",
  ];

  const icons = [
    require("../../assets/wheatherIcons/01d.png"),
    require("../../assets/wheatherIcons/01n.png"),
    require("../../assets/wheatherIcons/02d.png"),
    require("../../assets/wheatherIcons/02n.png"),
    require("../../assets/wheatherIcons/03d.png"),
    require("../../assets/wheatherIcons/03n.png"),
    require("../../assets/wheatherIcons/04d.png"),
    require("../../assets/wheatherIcons/04n.png"),
    require("../../assets/wheatherIcons/09d.png"),
    require("../../assets/wheatherIcons/09n.png"),
    require("../../assets/wheatherIcons/10d.png"),
    require("../../assets/wheatherIcons/10n.png"),
    require("../../assets/wheatherIcons/11d.png"),
    require("../../assets/wheatherIcons/11n.png"),
    require("../../assets/wheatherIcons/13d.png"),
    require("../../assets/wheatherIcons/13n.png"),
    require("../../assets/wheatherIcons/50d.png"),
    require("../../assets/wheatherIcons/50n.png"),
    require("../../assets/wheatherIcons/unknown.png"),
  ];

  const iconID = names.indexOf(icon);
  if (iconID == undefined) iconID = 18;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icons[iconID]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "43%",
    aspectRatio: 1,
    marginHorizontal: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "white",
    padding: 5,

    backgroundColor: "#CC9752",
  },

  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#E5DBCF",
  },

  image: {
    height: "100%",
    aspectRatio: 1,
  },
});
