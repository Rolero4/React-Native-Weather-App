export class Weather {
  constructor(icon, temp, press, desc, sunrise, sunset) {
    this.icon = icon;
    this.temperature = temp;
    this.pressure = press;
    this.description = desc;
    this.sunrise = sunrise;
    this.sunset = sunset;
  }
}
