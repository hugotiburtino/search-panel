import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DuckDuckGoRes } from '../lib/DuckDuckGoRes';
import { SearchService } from '../lib/SearchService';
import { environment } from 'src/environments/environment';

/**
 * Service that handles request to the DuckDuckGo API
 */
@Injectable({
  providedIn: 'root'
})
export class DuckDuckGoService implements SearchService {

  /** Event Emitter that notifies the DDG box in order to display entries */
  emitter: EventEmitter<DuckDuckGoRes> = new EventEmitter();

  constructor(private http: HttpClient) { }

  /**
   * Makes request to the Instan Answer API of DuckDuckGo
   *
   * @param userinput User's text for the search
   */
  query(userinput: string) {
    this.http.get<any>('https://api.duckduckgo.com/?q=' + userinput +
                       '&format=json' + '&t=' + environment.APP_NAME)
      .subscribe(res => {
        this.emitter.emit(res);
      }, err => {
        console.error(err);
      });
  }

}
