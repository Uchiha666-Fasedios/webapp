import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';//esto q importo son clases del router necesarias para trabajar con parametros //son servicios necesarios q luego se deben inyectar el el constructor
import { Article } from '../../models/article';//{ Article } cargamos el modulo q esta en ../models/Article
import {ArticleService} from '../../services/article.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[ArticleService]
})
export class SearchComponent implements OnInit {

  public search: string;
public articles: Article[];
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {//params optiene todos los parametros q llegan por la url
      //this.nombre = params.nombre;//params tiene todo y .nombre porque se lo puse en app.routing como parametro
      //console.log(params);
var search=params['search'];
this.search =search;//aca toma el valor como un constructor para despues mostrarlo en la vista acordate q el ngOnInit se ejecuta automaticamente

      this._articleService.search(search).subscribe(
        response =>{
          if (response.articles) {
            this.articles=response.articles;
            //console.log(this.articles);
          }else{
            this.articles = [];//le doy un valor de un array vacio
          }
        },
        error => {
          console.log(error);
          this.articles = [];//le doy un valor de un array vacio
        }
      );
			//this.nombre = params['nombre'];
			//this.followers = +params.followers;//con el + lo convierto a number porqe los parametros q puse en app.routing estan como string

			//if(this.nombre == 'ninguno'){//si se cumple esta condicion me redirige a home
				//this._router.navigate(['/home']);
      //}
      

		});
  }

}
