import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {
  }


  fetchData(endpoint: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}${endpoint}`);
  }

   postData(data: any, endpoint:string): Observable<any> {
    return this.http.post(`${this.apiUrl}${endpoint}`, data);
  }
}
