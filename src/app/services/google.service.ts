import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GoogleResponse } from '../lib/GoogleResponse';
import { SearchService } from '../lib/SearchService';
import { environment } from 'src/environments/environment';

/**
 * Service that handles request to the Google API
 */
@Injectable({
  providedIn: 'root'
})
export class GoogleService implements SearchService {

  /** Emitter that notifies the Googlebox in order to display entries */
  emitter: EventEmitter<GoogleResponse> = new EventEmitter();

  headers = new HttpHeaders({
    'x-rapidapi-host': environment.RAPIDAPI_HOST,
    'x-rapidapi-key': environment.RAPIDAPI_KEY,
    useQueryString: 'true'
  });

  constructor(private http: HttpClient) { }

  /**
   * Makes request to Google API
   *
   * At current version it uses the Rapidapi,
   * so be sure to insert your secret key {@link headers}
   *
   * @param userinput User's text for the search
   */
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
