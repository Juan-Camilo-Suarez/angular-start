import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import mi componente
import { VideoJuegoComponent } from './video-juego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';


@NgModule({
  declarations: [
    AppComponent,
    //incluir el componente exportado
    VideoJuegoComponent,
    ZapatillasComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
