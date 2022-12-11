import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container"> | 
    <a routerLinkActive="active" 
       routerLink="/users">Users</a> |

    <a routerLinkActive="active" 
       routerLink="/form">Form</a> |
  </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
