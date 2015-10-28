import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
// import { RouterOutlet, RouteConfig } from 'angular2/router';
import { PageOne } from './PageOne/PageOne';
import { PageTwo } from './PageTwo/PageTwo';


@Component({
    selector: 'my-app',
})

@View({
  directives: [PageTwo, PageOne],
  // directives: [RouterOutlet, PageTwo, PageOne],
  template: `
    <h1>My First Angular 2 App</h1>
    <page-one></page-one>
    <page-two></page-two>
    `
})

// @RouteConfig([
//   { path: '/', component: PageOne, as: 'page-one' },
//   { path: '/two', component: PageTwo, as: 'page-two' }
// ])

class AppComponent {}

bootstrap(AppComponent);
