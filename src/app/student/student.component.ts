import { Component } from '@angular/core';
import {StudentService} from '../services/student.service';
import {Student} from '../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {
  param: string;
  items = [];
  pageSize = 5;
  student: Student;

  constructor(private studentService: StudentService) {

    this.student = new Student();
    this.student.name = '';
    this.student.dateOfBirth = '';
    this.student.mark = 0;

    this.search();
  }

  search() {
    this.studentService.getAll(this.items.length, this.pageSize)
      .subscribe((response: {}[]) => {
        this.items = [...this.items, ...response];
      });
  }

  addStudent() {
    console.log(this.student);
    this.studentService.addStudent(this.student)
      .subscribe(() => {
        this.search();
      });
  }

  erase() {
    const ids: any = this.items.filter(value => value.checked)
      .map(value => value.id);
    if (confirm('Видалити "' + ids.length + '" студент(а/ів) ?')) {
      this.studentService.deleteByIds(ids).subscribe(() => {
        alert('Видалено "' + ids.length + '" студент(а/ів).');
        this.search();
      });
    }
  }



  edit(item: Student) {
    this.student = item;
  }
}
