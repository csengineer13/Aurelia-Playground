import {inject} from 'aurelia-framework';        // DI fun ;)
import {HttpClient} from 'aurelia-fetch-client'; // Fetch plugin
import 'fetch';                                  // Fetch polyfill (w3c spec)

@inject(HttpClient) // ES6 inject decorater; Types to provide instances of
export class Users {
  heading = 'Github Users';
  users = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  // AURELIA PRO TIP!
  // The full navigation lifecycle includes: 
  // canActivate, activate, canDeactivate and deactivate hooks. 
  // The can* methods can return a boolean (or Promise of boolean) 
  // to accept or reject the transition into or out of the current screen
  activate() {
    return this.http.fetch('users')       // API CALL
      .then(response => response.json())  // Access as JSON    
      .then(users => this.users = users); // Update model with fetched values
  }
}