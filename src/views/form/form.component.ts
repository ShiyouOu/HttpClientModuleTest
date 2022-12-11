import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-form',
  template: `
  <h1>Form</h1>
  <label>New User</label>
  <input type="text">
  <button id="add-user" (click)="addUser()">Add User</button>
  `,
})
export class FormViewComponent {
  @Output() newUser = new EventEmitter<string>();

  addUser() {
    this.newUser.emit(
      (<HTMLInputElement>document.getElementById('add-user')).value
    );
  }
}
