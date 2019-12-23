import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  param: string;
  items = [];
  pageSize: number = 20;

  constructor(private studentService: StudentService) {
    this.search();
  }

  search() {
    this.studentService.getAll(this.items.length, this.pageSize)
      .subscribe((response) => {
        this.items += response;
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
  
}
