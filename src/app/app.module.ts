import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FuelformComponent} from './fuelform/fuelform.component';
import {FueltableComponent} from './fueltable/fueltable.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarformComponent} from './carform/carform.component';
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatLegacyOptionModule as MatOptionModule} from "@angular/material/legacy-core";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {AppRoutingModule} from './app-routing.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterOutlet} from "@angular/router";
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {MatLegacyTableModule as MatTableModule} from "@angular/material/legacy-table";
import {HttpClientModule} from "@angular/common/http";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { ChartpageComponent } from './chartpage/chartpage.component';

@NgModule({
  declarations: [
    AppComponent,
    FuelformComponent,
    FueltableComponent,
    CarformComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    ChartpageComponent
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
      MatNativeDateModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
