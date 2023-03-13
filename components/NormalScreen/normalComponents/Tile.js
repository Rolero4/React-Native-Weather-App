import { View, Text, Image, StyleSheet } from "react-native";

export default function Tile({ icon, value }) {
  var icons = [
    require("../../../assets/icons/tempreture.png"),
    require("../../../assets/icons/pressure.png"),
    require("../../../assets/icons/sunrise.png"),
    require("../../../assets/icons/sunset.png"),
  ];

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icons[icon]} />
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "40%",
    aspectRatio: 1,
    marginHorizontal: 5,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
    padding: 5,
    backgroundColor: "#CC9752",
  },

  text: {
    fontSize: 25,
    fontWeight: "900",
    color: "#E5DBCF",
  },

  image: {
    height: "50%",
    aspectRatio: 1,
  },
});
