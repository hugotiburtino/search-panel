import { SearchResponse } from './SearchResponse';

/**
 * Abstract class that has the relevant fields from the
 * Response of DuckDuckGo
 *
 * NOTE: at this version, the app is dealing with very few
 * fields
 */
export class DuckDuckGoRes implements SearchResponse {
    RelatedTopics: [
      {
        Result: string,
        Text: string
      }
    ];
}
