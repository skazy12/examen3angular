import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { AddgameComponent } from './components/addgame/addgame.component';
import { EditgameComponent } from './components/editgame/editgame.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
  { path: 'addgame', component: AddgameComponent,canActivate: [AuthguardGuard] },
  { path: 'editgame/:id', component: EditgameComponent,canActivate: [AuthguardGuard] },
  { path: 'contacto', component: ContactoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
