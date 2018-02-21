import {OnInit} from '@angular/core';

export class SearchItem implements OnInit {

    /**
     *
     * @param name
     * @param artist
     * @param link
     * @param thumbnail
     */
    constructor(public name: string,
                public artist: string,
                public link: string,
                public thumbnail: string) {
    }

    /**
     *
     */
    ngOnInit() {
    }
}
