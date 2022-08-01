import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import mi componente
import { VideoJuegoComponent } from './video-juego/videojuego.component';

@NgModule({
  declarations: [
    AppComponent,
    //incluir el componente exportado
    VideoJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
