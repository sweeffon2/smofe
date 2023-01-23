import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee, EmployeepageableResponse } from './models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  loadEmployees (
    search: string,
    sort: string,
    page: number,
    size: number,

    ): Observable<EmployeepageableResponse>{
    
      console.log('calling the employees service with parameters');
      
      return this.http.get<EmployeepageableResponse> ("http://localhost:8080/userinfoes/search/findAllByNameLike", 
      {        
      params: new HttpParams()
                .set('name', '%'+search+'%')
                // .set('filter', filter)
                .set('sort', sort)
                .set('page', page.toString())
                .set('size', size.toString())
      });
  }
}
