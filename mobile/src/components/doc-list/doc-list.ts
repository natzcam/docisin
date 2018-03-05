import { Component } from '@angular/core';

/**
 * Generated class for the DocListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'doc-list',
  templateUrl: 'doc-list.html'
})
export class DocListComponent {

  text: string;

  constructor() {
    console.log('Hello DocListComponent Component');
    this.text = 'Hello World';
  }

}
