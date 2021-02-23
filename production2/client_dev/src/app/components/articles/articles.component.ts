import { Component, OnInit,Input } from '@angular/core';
import { Article } from '../../models/article';//{ Article } cargamos el modulo q esta en ../models/Article
import { Global } from "../../services/global";//url del backend
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  
  public url:string;
  @Input() articles: Article[];//@Input() para poder usar los componentes variables etc..q vienen del componente padre en este caso home.component.html
  

  constructor() { this.url=Global.url;}

  ngOnInit(): void {
  }

}
