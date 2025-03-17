import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../components/login/login.component';
import { EnterTaskFormComponent } from '../components/enter-task-form/enter-task-form.component';
import { VisualizePlanComponent } from '../components/visualize-plan/visualize-plan.component';
import { HomeComponent } from '../components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnterTaskFormComponent,
    VisualizePlanComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
