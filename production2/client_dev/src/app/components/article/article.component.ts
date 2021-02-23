import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';//{ Article } cargamos el modulo q esta en ../models/Article
import {ArticleService} from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';//esto q importo son clases del router necesarias para trabajar con parametros //son servicios necesarios q luego se deben inyectar el el constructor
import { Global } from "../../services/global";//url del backend
import swal from 'sweetalert';//ESTO ES UN PLUJING DE ALERTAS Q LO INSTALE DESDE LA CONSOLA

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[ArticleService]
})
export class ArticleComponent implements OnInit {
  public url:string;
  public article: Article;

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { 

      this.url=Global.url;
    }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {//params optiene todos los parametros q llegan por la url
      let id= params['id'];
      //this.nombre = params.nombre;//params tiene todo y .nombre porque se lo puse en app.routing como parametro
      //console.log(params);
      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
          }else{
            this._router.navigate(['/home']);
          }
        },
        error => {
          this._router.navigate(['/home']);
        }
      );
			//this.nombre = params['nombre'];
			//this.followers = +params.followers;//con el + lo convierto a number porqe los parametros q puse en app.routing estan como string

			//if(this.nombre == 'ninguno'){//si se cumple esta condicion me redirige a home
				//this._router.navigate(['/home']);
    	//}

		});
  }
  

    delete(id){
swal({
  title: "Estas seguro?",
  text: "Una vez eliminado, no se podrá recuperar!",
  icon: "warning",
  buttons: [true,true],
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
//codigo de borrado //////lo demas es del pluying del mensaje
	this._articleService.deleteArticle(id).subscribe(//_articleService y esta clase q se invoca q esta en article.service.ts llama a este metodo delete(id)
  		response => {
				if (response.article) {
          /////////////////////////////////
          swal("El articulo ha sido borrado!!", {
      icon: "success",
      ////////////////////////////////////
    });
					//navigate para hacer una redireccion '/blog' esta es la ruta 
  				this._router.navigate(['/blog']);
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
////////////////////////////////
    
  } else {
    swal("Tranquilo nada se ha borrado!");
  }
});


  
  }






}
