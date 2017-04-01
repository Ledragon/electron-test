import { Component, Injectable, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { libraryService } from '../library.service';

@Component({
  selector: 'preview',
  templateUrl: 'app/preview/preview.html',
  providers: [libraryService]
})

export class PreviewComponent implements OnInit {
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
          .splice(0, 12);
      });
  }

}