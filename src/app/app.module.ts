import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './Routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { MatIconModule } from '@angular/material/icon';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { MatDividerModule } from '@angular/material/divider';

import { MatInputModule } from '@angular/material/input';

import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent
    
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule,

    BrowserModule,
    AppRoutingModule,

    FlexLayoutModule,

    FormsModule,

    ReactiveFormsModule,

    BrowserAnimationsModule,

    MatToolbarModule,

    MatInputModule,

    MatCardModule,

    MatMenuModule,

    MatIconModule,

    MatButtonModule,

    MatTableModule,

    MatDividerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
