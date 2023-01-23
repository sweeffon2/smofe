import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AttendenceResponse } from './models/Attendance';

@Injectable({
  providedIn: 'root'
})
export class CheckinProviderService {

  constructor(private http: HttpClient) { }

  loadCheckinsForUser (user: number, from: Date, to: Date) : Observable<AttendenceResponse>{
    
    console.log('calling the attendece service with parameters', user);
    console.log('calling the attendece service with parameters', from);
    
    console.log('calling the attendece service with parameters', to);
    
    return this.http.get<AttendenceResponse> ("http://localhost:8080/checkinouts/search/findAllByIdem_UseridAndIdem_ChecktimeBetween", 
    {        
    params: new HttpParams()
              .set('userid', user)
              .set('notBefore', moment(from).format("yyyy-MM-DD")) 
              .set('notAfter', moment(to).add(1, "days").format("yyyy-MM-DD"))
    });
}

}
