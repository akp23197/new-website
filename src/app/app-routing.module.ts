import { identifierModuleUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoComponent } from './compo/compo.component';
import { Compo1Component } from './compo1/compo1.component';
import { Demo2Component } from './demo2/demo2.component';

const routes: Routes = [
  {path:"compo",component:CompoComponent},
  {path:"compo1/:id",component:Compo1Component},
  {path:"demo",component:Demo2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
