import { SearchResponse } from './SearchResponse';
import { EventEmitter } from '@angular/core';

/**
 * Interface that stablishes the minimum a search service 
 * has to have in order to work in the app
 */
export interface SearchService {

    /** EventEmitter that notifies the corresponding display box */
    emitter: EventEmitter<SearchResponse>;

    /** Function to query the corresponding API */
    query(userinput:string);

}
