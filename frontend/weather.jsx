import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = { weather: '' }

    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }
  
  getWeather(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
    const apiKey = '36fc709d09178992e780b9fe1f5100d2'
    url += `&APPID=${apiKey}`;
    
    // make xmlhttp request
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.status === 200 && request.readyState === 4) {
        const data =  JSON.parse(request.response);
        this.setState({ weather: data })
      } 
    }
    request.open('GET', url, true);
    request.send();
  }


  render() {
    let weatherBox;
    let weatherDeets = this.state.weather;

    const toF = (kelvin) => { return (1.8 * (kelvin - 273) + 32); };

    if (this.state.weather !== '') {
      let temp = toF(weatherDeets.main.temp).toFixed(0);
      let min = toF(weatherDeets.main.temp_min).toFixed(0);
      let max = toF(weatherDeets.main.temp_max).toFixed(0);

      weatherBox = 
        <>
          <ul className="weather-data">
            <li>Expect: {weatherDeets.weather[0].description}</li>
            <li>Temperature: {temp}°F</li>
          <li>Today's Low: {min}°F / Today's High: {max}°F</li>
            <li>Humidity: {weatherDeets.main.humidity}%</li>
          </ul>
        </>

    } else {
      weatherBox = <p className="seeking-loc">Seeking location...</p>;
    }

    return (
      <>
        <div className="weather">
          <h4 className="weather-header">{this.state.weather.name} Weather:</h4>
          {weatherBox}
        </div>
      </>
    )
  }
}

export default Weather;