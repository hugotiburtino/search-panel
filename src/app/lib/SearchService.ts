import { SearchResponse } from './SearchResponse';
import { EventEmitter } from '@angular/core';

export interface SearchService {

    emitter: EventEmitter<SearchResponse>;

    query(userinput:string);

}