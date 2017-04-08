import { Component, Injectable, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { libraryService } from '../library.service';

@Component({
  selector: 'video-list',
  templateUrl: 'app/video-list/video-list.component.html',
  providers: [libraryService]
})

export class VideoListComponent implements OnInit {
  videos: Array<any> = [];

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
      });
  }

}