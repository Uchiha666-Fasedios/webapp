import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';//{ Zapatilla } cargamos el modulo q esta en ../models/zapatilla


@Injectable()//con esto no hace falta usar new para invocarlo
export class PeliculaService{

public peliculas: Pelicula[];

constructor(){
  this.peliculas = [
      new Pelicula("Spiderman 4",2020,"https://i.pinimg.com/originals/42/8c/7d/428c7dc836c7284f94e5cebc31c18574.jpg"),
      new Pelicula("Dragon Ball Z",2015,"https://i.pinimg.com/originals/07/34/73/073473307a11b59e432e5a52c2f1c3ac.jpg"),
      new Pelicula("Batman vs Superman 4",2019,"https://i1.wp.com/www.vinilonegro.com/wp-content/uploads/2016/03/Batman-v-Superman-3-e1459165974655.jpg?fit=600%2C400&ssl=1"),
      //{year:2020, title:"spiderman 4",image:"https://i.pinimg.com/originals/42/8c/7d/428c7dc836c7284f94e5cebc31c18574.jpg"},
     // {year:2015, title:"malaspina puta",image:"https://i.ibb.co/Y8SBcpN/Romina-malaspina-2.png"},
      //{year:2020, title:"Batman vs Superman 4",image:"https://i1.wp.com/www.vinilonegro.com/wp-content/uploads/2016/03/Batman-v-Superman-3-e1459165974655.jpg?fit=600%2C400&ssl=1"}
    ];
}

holaMundo(){
  return 'hola Kakaroto ';
}

getPeliculas(){
  return this.peliculas;
}

}