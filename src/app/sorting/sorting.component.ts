import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'sorting',
    templateUrl: 'app/sorting/sorting.component.html',
    styleUrls: ['app/sorting/sorting.component.css']
})

export class SortingComponent implements OnInit {
    @Output() sort = new EventEmitter<string>();
    constructor() { }

    ngOnInit() { }

    emitSort(property: string) {
        this.sort.emit(property);
    }
}