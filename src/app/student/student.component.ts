import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  param: string;
  response: any;
  items = [];

  constructor(private http: HttpClient) {
    this.search();
  }

  search() {
    this.http.get('http://localhost:8080/student/list')
      .subscribe((response) => {
        this.response = response;
        this.items = this.response;
        console.log(this.response);

      });
  }

  smth() {}


  ngOnInit() {
  }

}
