import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  providers: [PeliculaService]//providers para usar sevicios aca lo cargo
})
export class PeliculasComponent implements OnInit {

public titulo:string;
public peliculas: Pelicula[];
public favorita: Pelicula;
public fecha: any;
  constructor( //constructor q usa de parametro este objeto
   private _peliculaService: PeliculaService
   ) { 
    this.titulo='componente Pelicula';
    this.peliculas= this._peliculaService.getPeliculas();

    this.fecha = new Date(2020,8,12);
  }

  //ngOnInit esta clase de metodo se le dice Hooks y se lanza automaticamente despues del constructor
  ngOnInit(): void {
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
  }


  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

}
