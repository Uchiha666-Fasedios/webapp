import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';//{ Article } cargamos el modulo q esta en ../models/Article
import {ArticleService} from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';//esto q importo son clases del router necesarias para trabajar con parametros //son servicios necesarios q luego se deben inyectar el el constructor
import { UploadService } from '../../services/upload.service';
import { Global } from "../../services/global";//url del backend
import swal from 'sweetalert';//ESTO ES UN PLUJING DE ALERTAS Q LO INSTALE DESDE LA CONSOLA

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers:[ArticleService, UploadService]
})
export class ArticleEditComponent implements OnInit {

 public article: Article;
  public save_project;
  public status: string;
  public filesToUpload: Array<File>;
//public is_edit: string;
public url:string;


  constructor(
    private _articleService: ArticleService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {
       this.article = new Article('','','',null,null);
       
      this.url= Global.url;
       
    }


    ngOnInit(): void {

      this.getArticle();
  }

   onSubmit(form){
		
        // Guardar datos básicos
        //_projectService tiene el metodo create lo invoco y de parametro pongo article q tiene el modelo y subscribe para subscribirme y recoger el resultado q me devuelve y este metodo tiene
        //2 funciones de kalback response y error
        this._articleService.create(this.article).subscribe(
          response => {
            if(response.article){//si me llega el article con la informacion
            
            
              // Subir la imagen
              if (this.filesToUpload) {//filesToUpload viene del evento cuando elegi la imagen entonce si hay un archivo entro al if
                /*makeFileRequest este metodo se creo en upload.service.ts q tiene 4 parametros el primero va la url 
                el segundo va un array el tercero otro array y el cuarto una variable tipo string
                Global.url+"upload-image/"+response.project._id aca estoy poniendo la url y concatenando la accion y el id*/
                this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.article._id, [], this.filesToUpload, 'file0')//[] parametro opcional 'file0' el nombre q esta en el backend en el otro proyecto el de la carpeta backend en controllers article.js y es el nombre q se le puso a la tabla de la base de datos use ese en vez de image
                  //ACA CON ESTOS THEN SE DICE Q ESTOY LLAMANDO A LAS PROMESAS
                  .then((result: any) => {
                  
                    console.log(result);
                       
                  this.save_project = result.article;//lo guardo para llamarlo del html
    
                  this.status = 'success';
                  //.reset() metodo ya propio de form vacia el formulario
                  form.reset();
                  //ALERTA con un pluying de alertas q instale
                swal("Articulo actualizado!", "...el articulo se ha actualizado correctamente!", "success");

                  this._router.navigate(['/blog']);//me redirige
                });
              } else {
                //response.project esto va tener todo lo q me llego del formulario
                this.save_project = response.article;//lo guardo para llamarlo del html
                this.status = 'success';
                form.reset();
                //ALERTA con un pluying de alertas q instale
                swal("Articulo actualizado!", "...el articulo se ha actualizado correctamente!", "success");
                this._router.navigate(['/blog']);//me redirige
              }
              
            }else{
              this.status = 'failed';
              //ALERTA con un pluying de alertas q instale
                swal("fallo la actualizacion!", "...el articulo no se ha podido actualizar!", "error");
            }
          },
          error => {
            console.log(<any>error);
            //ALERTA con un pluying de alertas q instale
                swal("fallo la actualizacion!", "...el articulo no se ha podido actualizar!", "error");
          }
        );
      }
      
    
      fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;//<Array<File> lo casteo ..target el elemento q recivio el evento
      }


      getArticle(){
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

}
