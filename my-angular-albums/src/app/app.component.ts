import { Component, OnInit } from '@angular/core';

import { Album } from './albums/album.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'my angular albums';
    albumInfo: string;
    
    parentFunctionHandler2($event) {
        this.albumInfo = $event;
    }
}
