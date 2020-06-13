/**
 * Interface for API responses
 *
 * typifies the responses in order to keep 
 * them tight to the app. For examples, the
 * {@link ./SearchService | SearchService} uses
 * only event emitter that has the kind of response
 * this app supports.
 */
export interface SearchResponse {
    /** relevant attribute from Google API Response */
    results?;

    /** relevant attribute from DDG API Response */
    RelatedTopics?;
}
