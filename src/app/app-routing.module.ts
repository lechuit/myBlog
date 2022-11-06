import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ErrorPageComponent} from "./shared/error-page/error-page.component";
import {BlogModule} from "./blog/blog.module";

const routes: Routes = [


  {
    path: 'home',
    loadChildren: () => import('./blog/blog.module').then(modulo => modulo.BlogModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  },

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
