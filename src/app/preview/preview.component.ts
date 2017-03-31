import { Component } from '@angular/core';
import * as d3 from 'd3';
import * as path from 'path'
const projectRootPath = //path.resolve(__dirname);
process.cwd();
@Component({
  selector: 'preview',
  template: `<div class="flex-25" style="display:flex">
    <div class="preview">
        <div class="preview-image"></div>
        <span>{{name}}</span>
    </div>
</div>`
})
export class PreviewComponent {
  name = 'Angular';
  constructor() {
    d3.json(`file://${projectRootPath}/src/data/data.json`, (error, data: Array<any>) => {
      if (error) {
        console.error(error)
      } else {
        this.name = data[0].title;
        console.log(this.name)
      }
    });
  }
}