import { RouteGuardService } from './service/auth/route-guard.service';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuardService] },
  { path: 'listTodos', component: ListTodosComponent, canActivate: [RouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
