import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) { }

  getAll(from: number, size: number) {
    return this.http.get('http://localhost:8080/student/get/list/' + from + '/' + size);
  }

  deleteByIds(ids: any) {
    return this.http.post('http://localhost:8080/student/delete/list', ids);
  }

}
