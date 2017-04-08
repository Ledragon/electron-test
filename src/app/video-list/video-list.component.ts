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
  private _fulllist: Array<IVideo> = [];
  private _pageSize = 12;
  private _page = 0;
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
        this._fulllist = data;
        this._page = 0;
        this.refresh();
      });
  }
  select(video) {
    console.log(video);
    this.video = video;
    this.selectedChange.emit(video);
  }

  previous() {
    if (this._page > 0) {
      this._page--;
      this.refresh();
    }
  }
  next() {
    if (this._page * this._pageSize < this._fulllist.length) {
      this._page++;
      this.refresh();
    }
  }

  private refresh() {
    this.videos = this._fulllist
      .map((d: any) => {
        d.url = this._sanitizer.bypassSecurityTrustStyle(`url('data:image/png;base64,${d.serializedImage}')`);
        return d;
      })
      .sort((a, b) => a.title - b.title)
      .splice(this._page * this._pageSize, this._pageSize);
    this.select(this.videos[0]);
  }

}