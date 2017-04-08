import { Component, Injectable, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { libraryService } from '../library.service';
import { IVideo } from '../IVideo';

@Component({
  selector: 'video-list',
  templateUrl: 'app/video-list/video-list.component.html',
  providers: [libraryService],
  styleUrls: ['app/video-list/video-list.component.css']
})

export class VideoListComponent implements OnInit {
  videos: Array<IVideo> = [];
  @Input() video;


  @Output() selectedChange: EventEmitter<any> = new EventEmitter();

  constructor(private _libraryService: libraryService, private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.load();
  }

  private load() {
    this._libraryService.load()
      .subscribe((data: Array<any>) => {
        this.videos = data
          .map((d: any) => {
            d.url = this._sanitizer.bypassSecurityTrustStyle(`url('data:image/png;base64,${d.serializedImage}')`);
            return d;
          })
          .sort((a, b) => a.title - b.title)
          .splice(0, 12);
        this.select(this.videos[0]);
      });
  }
  select(video) {
    console.log(video);
    this.video = video;
    this.selectedChange.emit(video);
  }

}