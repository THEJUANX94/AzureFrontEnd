import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private URL = 'http://localhost:3000/'

  constructor(private http: HttpClient) {

   }

   obtainSUbject() {
    return this.http.get<any>(this.URL + 'subjects');
    window.location.reload();
  }

   addSSUbject(subject: any){
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(subject);
    return this.http.post(this.URL + 'subjects', body,{'headers':headers})
  }


}
