import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';

@NgModule({
    imports: [BrowserModule,
        HttpModule],
    declarations: [AppComponent, VideoListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
