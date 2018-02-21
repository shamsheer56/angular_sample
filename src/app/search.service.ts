import {Injectable} from '@angular/core';
import {HttpModule, Http, Response} from "@angular/http";

import {SearchItem} from "./searchitem";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {
    apiRoot: string = 'https://itunes.apple.com/search'; // Declare apiRoot variable for api calling

    /**
     *
     * @param http
     */
    constructor(private http: Http) {

    }

    /**
     *
     * @param term
     * @returns {Observable<R>}
     */
    search(term: string): Observable<SearchItem[]> {
        let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
        return this.http.get( apiURL )
            .map(res => {
                return res.json().results.map(item => {
                    return new SearchItem(
                        item.trackName,
                        item.artistName,
                        item.trackViewUrl,
                        item.artworkUrl30
                    );
                });
            });
    }
}
