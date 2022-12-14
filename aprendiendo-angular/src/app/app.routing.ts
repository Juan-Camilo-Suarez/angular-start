// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideoJuegoComponent } from './video-juego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component'; 
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';
// Array de rutas
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'zapatillas', component: ZapatillasComponent},
	{path: 'videojuego', component: VideoJuegoComponent},
	{path: 'cursos', component: CursosComponent},
	//en el path de cursos de pasan variables :nombre de la siguiente manera
	{path: 'cursos/:nombre/:followers', component: CursosComponent},
	{path: 'externo', component: ExternoComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: '**', component: HomeComponent}
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
