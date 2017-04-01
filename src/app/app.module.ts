import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
    imports: [BrowserModule,
        HttpModule],
    declarations: [AppComponent, PreviewComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
