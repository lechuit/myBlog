import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import {AppRoutingModule} from "./app-routing.module";
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        ErrorPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxHideOnScrollModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
