import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ListService {

  private URL = 'http://localhost:3000/'

  constructor(private http: HttpClient) {

   }

   obtainStudents() {
    return this.http.get<any>(this.URL + 'subjects');
    window.location.reload();
  }

   addStudent(student: any){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(student);
    return this.http.post(this.URL + 'subjects', body,{'headers':headers})
  }


}
