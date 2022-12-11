import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  usersList: Array<string> = [];

  getData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response) => {
        for (let key in response) {
          this.usersList.push(response[key].name);
        }
      });
  }

  ngOnInit() {
    this.getData();
  }
}
