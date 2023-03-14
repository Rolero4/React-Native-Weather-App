import { View, StatusBar, StyleSheet } from "react-native";
import React, { useState } from "react";
import Header from "./Header/Header";
import NormalScreen from "./NormalScreen/NormalScreen";
import FocusScreen from "./FocusScreen/FocusScreen";
import Search from "./Shared/components/Search";
import Description from "./Shared/components/Description";
import WeatherIcon from "./Shared/components/WeatherIcon";
import Coordinates from "./Shared/components/Coordinates";

import { Weather } from "./Shared/models/weatherInfo.model";
import { WeatherApiUrl } from "./Shared/api/api";
import { WeatherApiKey } from "./Shared/api/api";
import { Info } from "./Shared/models/otherInfo.model";

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
  const [weather, setWeather] = useState(new Weather("?", "?", "?", "?"));
  // other info
  const [info, setInfo] = useState(new Info("unknown", "?", "?", "?"));

  const getWeather = () => {
    fetch(
      `${WeatherApiUrl}/weather?q=${city}&appid=${WeatherApiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(
          new Weather(
            data.main.temp.toFixed() + "\u00b0C",
            data.main.pressure + "hPa",
            new Date(
              data.sys.sunrise * 1000 + data.timezone * 1000
            ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            new Date(
              data.sys.sunset * 1000 + data.timezone * 1000
            ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          )
        );
        setInfo(
          new Info(
            data.weather[0].icon,
            data.coord.lat,
            data.coord.lon,
            data.weather[0].description
          )
        );
      })
      .catch(() => {
        setWeather(new Weather("?", "?", "?", "?"));
        setInfo(new Info("unknown", "?", "?", "?"));
      });
  };

  return (
    <View style={styles.appContainer}>
      <Header callback={changeView} state={focus}></Header>
      <View style={styles.weatherContainer}>
        <Search onSubmit={getWeather} onChange={changeCity}></Search>
        <Coordinates lat={info.latitude} lon={info.longitude}></Coordinates>
        <WeatherIcon icon={info.icon}></WeatherIcon>
        <View style={styles.screenContainer}>
          {!focus ? (
            <NormalScreen weather={weather}></NormalScreen>
          ) : (
            <FocusScreen weather={weather}></FocusScreen>
          )}
        </View>
        <Description info={info.description}></Description>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flexDirection: "column",
    backgroundColor: "#0F3B5F",
    height: "100%",
    width: "100%",
  },

  weatherContainer: {
    height: "70%",
    width: "100%",
    alignItems: "center",
  },

  screenContainer: {
    width: "100%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
  },
});

// CC9752 CCCC00 E5DBCF 0F3B5F
//E8110F FBC723 1B6AA5
