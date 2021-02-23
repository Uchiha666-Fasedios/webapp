import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';//esto q importo son clases del router necesarias para trabajar con parametros //son servicios necesarios q luego se deben inyectar el el constructor

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
public nombre: string;
  constructor(
    private _route: ActivatedRoute,
		private _router: Router
    ) { }

  ngOnInit(): void {

		this._route.params.subscribe((params: Params) => {//params optiene todos los parametros q llegan por la url
      //this.nombre = params.nombre;//params tiene todo y .nombre porque se lo puse en app.routing como parametro
      //console.log(params);
      this.nombre = params.nombre;
			//this.nombre = params['nombre'];
			//this.followers = +params.followers;//con el + lo convierto a number porqe los parametros q puse en app.routing estan como string

			//if(this.nombre == 'ninguno'){//si se cumple esta condicion me redirige a home
				//this._router.navigate(['/home']);
    	//}

		});

  }


  redireccion(){
    this._router.navigate(['/pagina-de-pruebas','adrian']);
  }




}
