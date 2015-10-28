import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {WeatherService} from './WeatherService';

@Component({
  selector: 'weather-component',
  providers: [WeatherService]
})

@View({
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  templateUrl: './app/Weather/weather.html'
})

export class Weather {
  
  cityName: string;
  weatherService: WeatherService;
  weatherData: Object;

  constructor(weatherService: WeatherService) {
    this.weatherService = weatherService;
  }

  getWeatherByCityName() {
		this.weatherService
			.getWeatherByCityName(this.cityName)
			.then(() => {
				this.weatherData = this.weatherService.weatherData;
			});
	}

  getWeatherByLocation() {
    // this.weatherService
    //   .getWeatherByLocation()
    //   .then(() => {
    //     this.weatherData = this.weatherService.weatherData;
    //   });
  }

  kelvinToCelsius(tempKelvin: number) {
    return Math.floor(tempKelvin - 273.15) || 0 ;
  }

  getLocation() {
    // this.weatherService.getGeolocation();
  }
}
