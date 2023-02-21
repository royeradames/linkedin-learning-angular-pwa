import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {GeolocationService} from "./geolocation.service";
import {AppComponent} from './app.component';
import {DataService} from "./data.service";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from '@angular/material/icon';

import 'hammerjs';
import {ListComponent} from './list/list.component';
import {CoffeeComponent} from './coffee/coffee.component';
import {RouterModule, Routes} from "@angular/router";

import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatSliderModule} from "@angular/material/slider";

const routes: Routes = [{path: '', component: ListComponent}, {
  path: 'coffee',
  component: CoffeeComponent
}, {path: 'coffee/:id', component: CoffeeComponent}]

@NgModule({
  declarations: [AppComponent, ListComponent, CoffeeComponent],
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule, MatIconModule],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
