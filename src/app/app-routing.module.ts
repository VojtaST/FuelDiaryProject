import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CarformComponent} from "./carform/carform.component";
import {FuelformComponent} from "./fuelform/fuelform.component";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {FueltableComponent} from "./fueltable/fueltable.component";

const routes: Routes = [
  {path: 'car-form', component: CarformComponent},
  {path: 'fuel-form', component: FuelformComponent},
  {path: 'fuel-table', component: FueltableComponent},
  {path: 'register', component: UserRegistrationComponent},
  {path: 'login', component: UserLoginComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
