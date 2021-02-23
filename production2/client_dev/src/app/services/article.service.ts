//TODO ESTO CONTIEN EL SERVICIO PARA ENVIO DE PETICIONE AJAX DESDE HTTP
//VA TENER LA CLASE Y LOS METODOS NECESARIOS
import { Injectable } from '@angular/core';//para poder hacer peticiones ajax a un servicio externo a una url externa
import { HttpClient, HttpHeaders } from '@angular/common/http';//para poder hacer peticiones ajax a un servicio externo a una url externa
import { Observable } from 'rxjs';//para poder recoger la informacion q nos devuelve el apirest cuando hagamos una peticion
import { Article } from '../models/article';//{ Article } cargamos el modulo q esta en ../models/Article
import { Global } from "./global";



@Injectable()//con esto no hace falta usar new para invocarlo
export class ArticleService{

public url:string;
constructor(
		private _http: HttpClient //le inyecto al constructor le pongo de parametro este modulo para q tenga todo paras las peticiones http
	){
		this.url=Global.url;
	}


pruebas(){
  return 'soy el servicio';
}


	getArticles(last: any = null): Observable<any>{
	
		var articles = 'articles';
		if (last != null) {
	//cargo string para concatenar con la url
 articles = 'articles/true';
} 

return this._http.get(this.url+articles);
}



getArticle(articleId): Observable<any>{
	
	/*var articles = 'articles';
	if (last != null) {
//cargo string para concatenar con la url
articles = 'articles/true';
} */

return this._http.get(this.url+'article/'+articleId);
}



search(searchString):Observable<any>{
	return this._http.get(this.url+'search/'+searchString);
	}
	
	create(article: Article):Observable<any> { //va tener de parametro un parametro typo Article q tiene el modelo y Observable para poder recoger la informacion
		let params = JSON.stringify(article);//convierto en json string para poder recoger la informacion
		let headers = new HttpHeaders().set('Content-Type','application/json');//HttpHeaders me permite utilizar cabezeras 'Content-Type','application/json' el formato de cabecera q va a tener
	//_http ya contiene el paqete con metodos necesarios y post porqe la info viene por post
		//url tiene la pagina base del backend concateno todo lo demas save-project porqe asi se llama el metodo para guardar datos y params tiene el modelo para llamar a los datos y guardar en el backend
		return this._http.post(this.url+'save', params, {headers: headers});//retorno la ruta del backend con su accion de guardar un proyecto y la cabezera para q no alla errores
	}

	updateArticle(article): Observable<any>{//de parametro va tener un articulo
		let params = JSON.stringify(article);//convierto en json string para poder recoger la informacion
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'article/'+article._id, params, {headers: headers});//put metodo q sirve para actualizar un recurso en el backend
	}

	deleteArticle(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'article/'+id, {headers: headers});//lo mismo pero en vez de por post o por get es por delete
	}

}
