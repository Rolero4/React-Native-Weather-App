import { View, Text, StyleSheet } from "react-native";
import Clock from "./headerComponents/Clock";
import Toggler from "./headerComponents/Toggler";
import Calendar from "./headerComponents/Calendar";

export default function Header({ callback, state }) {
  return (
    <View
      style={{
        paddingTop: 50,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <Toggler callback={callback} state={state}></Toggler>
      <Clock></Clock>
      <Calendar></Calendar>
    </View>
  );
}
