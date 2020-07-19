import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient ) { }

  gettask() {
    return this.http.get(`${environment.apiEndPoint}/gettask`);
  }
  addtask(payload) {
    return this.http.post(`${environment.apiEndPoint}/addtask`, payload);
  }
  updatetask(payload) {
    return this.http.post(`${environment.apiEndPoint}/updatetask`, payload);
  }
  deletetask(id) {
    return this.http.get(`${environment.apiEndPoint}/deletetask/`+ id);
  }
}
