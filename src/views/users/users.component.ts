import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-users',
  templateUrl: '../../app/users.component.html',
})
export class UsersViewComponent implements OnInit {
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
