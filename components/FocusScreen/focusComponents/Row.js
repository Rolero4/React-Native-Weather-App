import { View, Text, Image, StyleSheet } from "react-native";

export default function Row({ value, name }) {
  var icons = [
    require("../../../assets/icons/tempreture.png"),
    require("../../../assets/icons/pressure.png"),
    require("../../../assets/icons/sunrise.png"),
    require("../../../assets/icons/sunset.png"),
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.elementName}>{name}</Text>
      <Text style={styles.elementDetail}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "25%",
    backgroundColor: "#CC9752",
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },

  elementName: {
    fontSize: 30,
    fontWeight: "700",
    color: "#E5DBCF",
  },

  elementDetail: {
    fontSize: 35,
    fontWeight: "900",
    color: "#E5DBCF",
  },
});
