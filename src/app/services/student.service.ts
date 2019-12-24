import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../model/student';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) { }

  getAll(from: number, size: number) {
    return this.http.get('http://localhost:8080/student/get/list/' + from + '/' + size);
  }

  addStudent(student: Student) {
    return this.http.post('http://localhost:8080/student/add', student);
  }

  deleteByIds(ids: any) {
    return this.http.post('http://localhost:8080/student/delete/list', ids);
  }

}
