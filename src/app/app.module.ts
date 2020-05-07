import { NgModule, ErrorHandler,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";

import { MyApp } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { FilterModalPage } from '../pages/filter-modal/filter-modal';

import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [MyApp,FilterModalPage],
  imports: [
    IonicModule.forRoot(MyApp),
  
    BrowserModule,
    HttpClientModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [BrowserModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp,FilterModalPage],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule { }
