import { SearchResponse } from './SearchResponse';

export class GoogleResponse implements SearchResponse {
    results: [
      {
          title: string,
          description:string,
          link:string
      }
    ];
}