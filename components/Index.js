import { View, Text, StatusBar, StyleSheet } from "react-native";
import React, { useState } from "react";
import Header from "./Header/Header";
import NormalScreen from "./NormalScreen/NormalScreen";
import FocusScreen from "./FocusScreen/FocusScreen";
import Search from "./Shared/Search";
import Description from "./Shared/Description";
import { Weather } from "./Shared/weatherInfo.model";
import { WeatherApiUrl } from "./Shared/api";
import { WeatherApiKey } from "./Shared/api";

export default function Index() {
  // change view
  const [focus, setFocus] = useState(false);
  const changeView = () => {
    setFocus(!focus);
  };

  // change city
  const [city, setCity] = useState(null);
  const changeCity = (text) => {
    setCity(text);
  };

  // weather info
  const [weather, setWeather] = useState(
    new Weather("unknown", "?", "?", "?", "?", "?")
  );

  const getWeather = () => {
    fetch(
      `${WeatherApiUrl}/weather?q=${city}&appid=${WeatherApiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(
          new Weather(
            data.weather[0].icon,
            data.main.temp.toFixed() + "\u00b0C",
            data.main.pressure + "hPa",
            data.weather[0].description,
            new Date(
              data.sys.sunrise * 1000 + data.timezone * 1000
            ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            new Date(
              data.sys.sunset * 1000 + data.timezone * 1000
            ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          )
        );
      })
      .catch(() => setWeather(new Weather("unknown", "?", "?", "?", "?", "?")));
  };

  return (
    <View style={styles.componentsContainer}>
      <Header callback={changeView} state={focus}></Header>
      <View style={styles.appContainer}>
        <Search onSubmit={getWeather} onChange={changeCity}></Search>
        <View style={styles.screenContainer}>
          {!focus ? (
            <NormalScreen weather={weather}></NormalScreen>
          ) : (
            <FocusScreen weather={weather}></FocusScreen>
          )}
        </View>
        <Description info={weather.description}></Description>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  componentsContainer: {
    flexDirection: "column",
    backgroundColor: "#0F3B5F",
    height: "100%",
    width: "100%",
  },

  appContainer: {
    height: "85%",
    width: "100%",
    alignItems: "center",
  },

  screenContainer: {
    width: "100%",
    height: "70%",
  },
});

// CC9752 CCCC00 E5DBCF 0F3B5F
//E8110F FBC723 1B6AA5
