import { Component, Injectable, OnInit } from '@angular/core';
import { libraryService } from '../library.service';

@Component({
  selector: 'preview',
  templateUrl: 'app/preview/preview.html',
  providers: [libraryService]
  //   template: `<div class="flex-25" style="display:flex">
  //     <div class="preview">
  //         <div class="preview-image"></div>
  //         <span>{{name}}</span>
  //     </div>
  // </div>`
})

export class PreviewComponent implements OnInit {
  videos: Array<any> = [];

  constructor(private _libraryService: libraryService) {
  }

  ngOnInit() {
    this.load();
  }
  private load() {
    this._libraryService.load()
      .subscribe((data: Array<any>) => {
        this.videos = data
          .map((d: any) => {
            d.url = `url('data:image/png;base64,${d.serializedImage}')`;
            return d;
          })
          .splice(0, 12);
        console.log(this.videos)
      });
  }

}