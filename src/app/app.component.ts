import {Component , OnInit} from '@angular/core';
import {SearchService} from "./search.service";
import {SearchItem} from "./searchitem"; // include search item class

import {FormControl } from "@angular/forms";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    private loading: boolean = false; // for Loading purpose
    private results: Observable<SearchItem[]>; // search result as a object of SearchItem class
    private searchField: FormControl; // declare variable searchField for dynamic binding
    private title: string; // declare variable title for dynamic binding

    /**
     * initialize the constructor with SearchService Object
     * @param itunes
     */
    constructor(private itunes: SearchService) {

    }

    /**
     * binding search activities with text box
     */
    ngOnInit() {
        this.title = 'Angular';
        this.searchField = new FormControl();
        this.results = this.searchField.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .do(_ => this.loading = true)
            .switchMap(term => this.itunes.search(term))
            .do(_ => this.loading = false);
    }

    /**
     * Here Perform the serach activity
     * @param strSearch
     */
    doSearch(strSearch: string) {
        this.itunes.search(strSearch);
    }
}

