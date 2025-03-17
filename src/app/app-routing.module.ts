import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { EnterTaskFormComponent } from '../components/enter-task-form/enter-task-form.component';
import { VisualizePlanComponent } from '../components/visualize-plan/visualize-plan.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'task', component: EnterTaskFormComponent},
  {path: 'study-board', component: VisualizePlanComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
