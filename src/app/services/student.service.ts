import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) { }



  getAll() {
    return this.http.get('http://localhost:8080/student/get/list');
  }

  deleteByIds(ids: any) {
    return this.http.post('http://localhost:8080/student/delete/list', ids);
  }

}
