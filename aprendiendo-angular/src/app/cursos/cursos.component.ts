import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
	public nombre: string = '';
	public followers: number = 0;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router
	){ }

	ngOnInit() {
		this._route.params.subscribe((params: Params) => {
			this.nombre = params['nombre'];
      this.followers = params['followers'];
      console.log(typeof +params['followers']);

      //redirecionamiento
      if(this.nombre == 'ninguno'){
				this._router.navigate(['/home']);
			}


		});
	}

  redirigir(){
    //asi se hace una redirecion a otra url
    this._router.navigate(['/zapatillas']);
  }
}
