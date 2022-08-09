import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//para poder formularios 
import { FormsModule } from '@angular/forms';
//impor del routing
import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import mi componente
import { VideoJuegoComponent } from './video-juego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
//impor para peticioes ajax
import { HttpClientModule } from '@angular/common/http';

import { CalculadoraPipe } from './pipes/calculadora.pipe';

@NgModule({
  declarations: [
    AppComponent,
    //incluir el componente exportado
    VideoJuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //ṕara poder hacer formularios en html
    FormsModule,
    routing,
    HttpClientModule 
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
