import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  param: string;
  response: any;
  items = [];

  constructor(private studentService: StudentService) {
    this.search();
  }

  search() {
    this.studentService.getAll()
      .subscribe((response) => {
        this.response = response;
        this.items = this.response;
        console.log(this.response);

      });
  }

  erase() {
    
    const ids: any = this.items.filter(value => value.checked)
      .map(value => value.id);

    console.log(ids);
    this.studentService.deleteByIds(ids).subscribe(() => {
      this.search();
    });

  }


  ngOnInit() {
  }

}
