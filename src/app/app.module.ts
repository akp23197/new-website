import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { CompoComponent } from './compo/compo.component';
import { Compo1Component } from './compo1/compo1.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { Demo2Component } from './demo2/demo2.component';
import { Custom1Pipe } from './custom1.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CompoComponent,
    Compo1Component,
    CustomPipePipe,
    Demo2Component,
    Custom1Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
