import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NuevaRecetaComponent } from './components/nueva-receta/nueva-receta.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';

import {AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';

import {AuthService } from './services/auth.service';
import {RecetaService} from './services/receta.service';

import { environment } from '../environments/environment';
import {AuthGuard} from './guards/auth.guard';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NuevaRecetaComponent,
    AdminComponent,
    AboutComponent,
    NotFoundComponent,
    DetailsComponent,
    EditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, RecetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
