import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubscribersComponent } from './components/subscribers/subscribers.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';
import { UsersComponent } from './components/users/users.component';
import { CrudSubscribersComponent } from './components/crud-subscribers/crud-subscribers.component';

import { SubscriberService } from './services/subscriber.service'
import { DatePipe } from '@angular/common';
import { CrudComplaintsComponent } from './components/crud-complaints/crud-complaints.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    SubscribersComponent,
    ComplaintsComponent,
    AuditTrailComponent,
    CrudSubscribersComponent,
    UsersComponent,
    CrudComplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    SubscriberService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
