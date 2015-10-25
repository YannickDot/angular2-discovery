import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})

@View({
  // templateUrl:
  directives: [NgFor],
  template: `
    <h1>My First Angular 2 App</h1>
    <p>Friends of {{name}}:</p>
    <ul>
       <li *ng-for="#name of names">
          {{ name }}
       </li>
    </ul>
    `
})

class AppComponent {
  name: string;
  names: Array<string>;

  constructor() {
    this.name = "Yannick";
    this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}

bootstrap(AppComponent);
