import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, PreviewComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
