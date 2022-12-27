import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FuelformComponent} from './fuelform/fuelform.component';
import {FueltableComponent} from './fueltable/fueltable.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarformComponent} from './carform/carform.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from './app-routing.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterOutlet} from "@angular/router";
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ChartpageComponent} from './chartpage/chartpage.component';
import {ToastrModule} from "ngx-toastr";
import { FuelformeditComponent } from './fuelformedit/fuelformedit.component';

@NgModule({
  declarations: [
    AppComponent,
    FuelformComponent,
    FueltableComponent,
    CarformComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    ChartpageComponent,
    FuelformeditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    RouterOutlet,
    MatTableModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
