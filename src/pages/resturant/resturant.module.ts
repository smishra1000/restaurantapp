import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResturantPage } from './resturant';

@NgModule({
  declarations: [
    ResturantPage,
  ],
  imports: [
    IonicPageModule.forChild(ResturantPage),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ResturantPageModule {}
