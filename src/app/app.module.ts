import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxMaskModule} from "ngx-mask";
import { AppFirstnameFilterPipe } from './shared/pipes/app-firstname-filter.pipe';
import { AppLastnameFilterPipe } from './shared/pipes/app-lastname-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PersonAddComponent,
    PersonViewComponent,
    PersonsListComponent,
    AppFirstnameFilterPipe,
    AppLastnameFilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
