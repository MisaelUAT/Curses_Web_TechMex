import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'centro-ayuda', component: CentroAyudaComponent },
  { path: 'suscripciones', component: SuscripcionesComponent },
  { path: 'acerca-nosotros', component: AcercaNosotrosComponent }
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
    CentroAyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
