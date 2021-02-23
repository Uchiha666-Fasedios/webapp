import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import { Article } from '../../models/article';//{ Article } cargamos el modulo q esta en ../models/Article
import { Global } from "../../services/global";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers:[ArticleService]
})
export class BlogComponent implements OnInit {

public url:string;
  public articles: Article[];

  public title: string;
  constructor(private _articleService: ArticleService) {
    this.title = 'Blog';
    this.url=Global.url;
   }

  //se ejecuta automaticamente
  ngOnInit(): void {
    //console.log(this._articleService.pruebas());
    this._articleService.getArticles().subscribe(
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