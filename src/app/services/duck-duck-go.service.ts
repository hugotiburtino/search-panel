import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DuckDuckGoRes } from '../lib/DuckDuckGoRes';

@Injectable({
  providedIn: 'root'
})
export class DuckDuckGoService {

  emitter: EventEmitter<DuckDuckGoRes> = new EventEmitter();

  constructor(private http: HttpClient) { }

  query(userinput: string) {
    this.http.get<DuckDuckGoRes>('https://api.duckduckgo.com/?q=' + userinput + '&format=json')
      .subscribe(res => {
        this.emitter.emit(res);
      }, err => {
        console.error(err);
      });
  }

}
