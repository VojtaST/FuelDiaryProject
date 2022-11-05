import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FuelformComponent } from './fuelform/fuelform.component';
import { FueltableComponent } from './fueltable/fueltable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarformComponent } from './carform/carform.component';

@NgModule({
  declarations: [
    AppComponent,
    FuelformComponent,
    FueltableComponent,
    CarformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
