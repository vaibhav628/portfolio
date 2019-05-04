import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private storage: Storage) {
    // set a key/value
    this.storage.set('name', 'Max');

    // Or to get a key/value pair
    this.storage.get('age').then((val) => {
      console.log('Your age is', val);
    });
  }
}
