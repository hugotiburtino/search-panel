import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GoogleResponse } from '../lib/GoogleResponse';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  emitter: EventEmitter<GoogleResponse> = new EventEmitter();
  
  headers = new HttpHeaders({
    "x-rapidapi-host": "google-search3.p.rapidapi.com",
    "x-rapidapi-key": "", // put your KEY here
    "useQueryString": "true"
  })
 
  constructor(private http: HttpClient) { }

  query(userinput: string) {
    const requestparams = new HttpParams().set('q', userinput).set('max_results', '10');
    this.http.request<GoogleResponse>('GET',
        'https://google-search3.p.rapidapi.com/api/v1/search', 
        {headers: this.headers, params: requestparams}
      ).subscribe(res => {
        console.log(res);
        this.emitter.emit(res);
      }, err => {
        console.error(err);
      });
  }
}
