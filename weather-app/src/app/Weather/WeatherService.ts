import {Http} from 'angular2/http';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?'
const URL_LAT = 'lat=';
const URL_LONG = '&lon=';
const URL_QUERY = 'q=';

export class WeatherService {
  weatherData: any;
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  private getGeolocation() {
    return Promise.resolve(1);
    // return geolocation.getLocation();
  }

  private getWeatherData(url:string) {
    return this.http.get(url)
      .then((data) => {
        this.weatherData = data;
      })
      .catch((err) => {});
  }

  getWeatherByLocation() {
    // return this.getGeolocation().then(function(data){
    //    var url = BASE_URL + URL_LAT + data.coords.latitude + URL_LONG + data.coords.longitude;
    //    return this.getWeatherData(url);
    // });
  }

  getWeatherByCityName(cityName: string) {
    let url = BASE_URL + URL_QUERY + cityName;
    return this.getWeatherData(url);
  }

}
