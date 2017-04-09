import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ascending } from 'd3-array';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const projectRootPath = process.cwd();

@Injectable()
export class libraryService {
    constructor(private http: Http) {

    }

    load() {
        return this.http.get(`file://${projectRootPath}/src/data/data.json`)
            .map(d => {
                var array: Array<any> = d.json();
                array = array.sort((a, b) => ascending(a.title, b.title))
                return array;
            });
    }
}
