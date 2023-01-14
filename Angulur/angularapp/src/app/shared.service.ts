import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:5062/api";
  readonly PhotoUrl = "http://localhost:5062/Photes"

  constructor(private http: HttpClient) { }
  getTeacherList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Teacher');
  }

  AddTec(val: any) {
    return this.http.post(this.APIUrl + '/Teacher', val);
  }

  EditTec(val: any) {
    return this.http.put(this.APIUrl + '/Teacher', val);
  }


}
