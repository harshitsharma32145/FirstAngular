import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ChildComponent } from './child/child.component';
import { SonComponent } from './son/son.component';
import { Son2Component } from './son2/son2.component';
import { FormComponent } from './form/form.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { HeaderComponent } from './header/header.component';
import { NewComponent } from './new/new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Table2Component } from './table2/table2.component';
import { NoPageComponent } from './no-page/no-page.component';
import { DynamicNewComponent } from './dynamic-new/dynamic-new.component';
import {HttpClientModule} from "@angular/common/http"
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ChildComponent,
         SonComponent,
         Son2Component,
         FormComponent,
         ReactiveComponent,
         HeaderComponent,
         NewComponent,
         DynamicComponent,
         Table2Component,
         NoPageComponent,
         DynamicNewComponent,],
         
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,HttpClientModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
