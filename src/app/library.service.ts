import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const projectRootPath = process.cwd();

@Injectable()
export class libraryService {
    constructor(private http: Http) {

    }

    load() {
        return this.http.get(`file://${projectRootPath}/src/data/data.json`)
        .map(d=> d.json())    ;
    }
}
