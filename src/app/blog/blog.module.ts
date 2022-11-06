import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import {BlogRoutingModule} from "./blog-routing.module";
import {NgxHideOnScrollModule} from "ngx-hide-on-scroll";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NavbarComponent} from "../shared/navbar/navbar.component";


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgxHideOnScrollModule,
    FlexLayoutModule,
  ]
})
export class BlogModule { }
