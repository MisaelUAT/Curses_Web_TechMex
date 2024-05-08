import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Scripts of the Javascripts
import { ScriptsLoadingService } from './scripts-loading.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { SuscripcionesComponent } from './content/suscripciones/suscripciones.component';
import { AcercaNosotrosComponent } from './content/acerca-nosotros/acerca-nosotros.component';
import { BienvenidosComponent } from './content/bienvenidos/bienvenidos.component';
import { RouterModule,Routes } from '@angular/router';
import { CentroAyudaComponent } from './content/centro-ayuda/centro-ayuda.component';
import { PlantillaCursoComponent } from './content/plantilla-curso/plantilla-curso.component';
import { HernandezmisaelComponent } from './hernandezmisael/hernandezmisael.component';
import { AngularFireModule } from '@angular/fire/compat';

const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'centro-ayuda', component: CentroAyudaComponent },
  { path: 'suscripciones', component: SuscripcionesComponent },
  { path: 'acerca-nosotros', component: AcercaNosotrosComponent },
  {path: 'plantilla-curso', component: PlantillaCursoComponent},
  {path: 'miportafolio', component: HernandezmisaelComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    InicioComponent,
    SuscripcionesComponent,
    AcercaNosotrosComponent,
    BienvenidosComponent,
    CentroAyudaComponent,
    PlantillaCursoComponent,
    HernandezmisaelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBZhuH0PDvtAqzEiFZ6enoVLwsoAODl03k",
      authDomain: "techmex-57.firebaseapp.com",
      projectId: "techmex-57",
      storageBucket: "techmex-57.appspot.com",
      messagingSenderId: "703863408934",
      appId: "1:703863408934:web:61c309be8e889fa6c7d9e7",
      measurementId: "G-HDSY8NVSX0"
    }),
  ],
  providers: [
    ScriptsLoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
