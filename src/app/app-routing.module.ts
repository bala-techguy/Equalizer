import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SubscribersComponent } from './components/subscribers/subscribers.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  {path: 'login', component: LoginComponent},
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'subscribers', component: SubscribersComponent, canActivate: [AuthGuard]},
  {path: 'complaints', component: ComplaintsComponent, canActivate: [AuthGuard]},
  {path: 'audit-trail', component: AuditTrailComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
