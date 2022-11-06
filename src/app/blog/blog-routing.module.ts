import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import * as path from "path";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule { }
