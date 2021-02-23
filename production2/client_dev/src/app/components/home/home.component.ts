import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import { Article } from '../../models/article';//{ Article } cargamos el modulo q esta en ../models/Article

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ArticleService]
})
export class HomeComponent implements OnInit {

  public articles: Article[];
  public title: string;
  constructor(private _articleService: ArticleService) {
    this.title = 'Ultimos articulos';
   }

  //se ejecuta automaticamente
  ngOnInit(): void {

     //console.log(this._articleService.pruebas());
     this._articleService.getArticles(true).subscribe(
      response=>{
if (response.articles) {
  this.articles= response.articles;
}else{

}
      },
      error=>{
console.log(error);
      }
    );
  }

}
