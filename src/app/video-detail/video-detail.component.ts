import { Component, Input } from '@angular/core';

import { IVideo } from '../IVideo';
@Component({
    selector: 'video-detail',
    templateUrl: 'app/video-detail/video-detail.component.html',
    styleUrls:['app/video-detail/video-detail.component.css']
})
export class VideoDetailComponent {
    @Input() video: IVideo;

    constructor() { }
    
}