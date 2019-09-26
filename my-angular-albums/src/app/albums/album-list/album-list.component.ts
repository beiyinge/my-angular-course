import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Album } from '../album.model';

import {ALBUMS} from "../albums.data";

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
    albumsArray: Album[];

    @Output()
    albumClicked2: EventEmitter<string> = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {
        this.albumsArray = ALBUMS;
    }

    parentFunctionHandler(album) {
        alert(
            'Album ' +
                album.albumName +
                ' was sent from the album card component'
        );

        this.albumClicked2.emit(album.albumName + " " + album.id);
    }
}
