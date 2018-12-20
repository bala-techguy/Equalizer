import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SubscribersComponent } from './components/subscribers/subscribers.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';
import { UsersComponent } from './components/users/users.component';
import { CrudSubscribersComponent } from './components/crud-subscribers/crud-subscribers.component';
import { CrudComplaintsComponent } from './components/crud-complaints/crud-complaints.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  {path: 'login', component: LoginComponent},
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'subscribers', component: SubscribersComponent, canActivate: [AuthGuard]},
  {path: 'subscribers/add', component: CrudSubscribersComponent,data : {action : 'Add'}, canActivate: [AuthGuard]},
  {path: 'subscribers/view/:id', component: CrudSubscribersComponent,data : {action : 'View'}, canActivate: [AuthGuard]},
  {path: 'subscribers/modify/:id', component: CrudSubscribersComponent,data : {action : 'Modify'}, canActivate: [AuthGuard]},
  {path: 'subscribers/delete/:id', component: CrudSubscribersComponent,data : {action : 'Delete'}, canActivate: [AuthGuard]},
  {path: 'complaints', component: ComplaintsComponent, canActivate: [AuthGuard]},
  {path: 'complaints/add', component: CrudComplaintsComponent,data : {action : 'Add'}, canActivate: [AuthGuard]},
  {path: 'complaints/view/:id', component: CrudComplaintsComponent,data : {action : 'View'}, canActivate: [AuthGuard]},
  {path: 'complaints/modify/:id', component: CrudComplaintsComponent,data : {action : 'Modify'}, canActivate: [AuthGuard]},
  {path: 'complaints/delete/:id', component: CrudComplaintsComponent,data : {action : 'Delete'}, canActivate: [AuthGuard]},
  {path: 'audit-trail', component: AuditTrailComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  //{ path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
