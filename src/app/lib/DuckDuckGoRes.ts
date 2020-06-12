import { SearchResponse } from './SearchResponse';

export class DuckDuckGoRes implements SearchResponse {
    RelatedTopics: [
      {
          Result:string,
          Text:string
      }
    ];
}