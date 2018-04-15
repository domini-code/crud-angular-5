import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NuevaRecetaComponent } from './components/nueva-receta/nueva-receta.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent} from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'nueva', component: NuevaRecetaComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent,  canActivate: [AuthGuard]},
  {path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
