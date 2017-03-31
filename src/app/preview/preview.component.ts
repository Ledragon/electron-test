import { Component, Injectable, OnInit } from '@angular/core';
import * as path from 'path';
import { Http } from '@angular/http';
const projectRootPath = //path.resolve(__dirname);
  process.cwd();
@Component({
  selector: 'preview',
  templateUrl: 'app/preview/preview.html'
  //   template: `<div class="flex-25" style="display:flex">
  //     <div class="preview">
  //         <div class="preview-image"></div>
  //         <span>{{name}}</span>
  //     </div>
  // </div>`
})

export class PreviewComponent implements OnInit {
  name = 'Angular';
  videos: Array<any> = [];

  constructor(private http: Http) {
    this.name = "michel";

    // d3.json(`file://${projectRootPath}/src/data/data.json`,
    //   (error, data: Array<any>) => {
    //   if (error) {
    //     console.error(error)
    //   } else {
    //     this.videos =data;
    //   }
    // });
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.http.get(`file://${projectRootPath}/src/data/data.json`)
      .subscribe(data => console.log(data));
  }
}