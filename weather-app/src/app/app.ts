import {Component, bootstrap} from 'angular2/angular2';
import {Weather} from './Weather/Weather';

@Component({
  selector: 'my-app',
  directives: [Weather],
  template: `
    <h1>Angular 2 Weather</h1>
    <weather-component></weather-component>
  `
})

class AppComponent { }

bootstrap(AppComponent);
