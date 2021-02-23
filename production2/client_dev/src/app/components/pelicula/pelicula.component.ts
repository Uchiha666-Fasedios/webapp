//EventEmitter para crear eventos por nosotros mismos
//Output para poder usar el decorador con los valores del componente hijo
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Pelicula } from "../../models/pelicula";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

@Input() pelicula: Pelicula;
@Output() MarcarFavorita =  new EventEmitter;//creo el output MarcarFavorita q lo estoy llamando de la vista peliculas q es el hijo 

  constructor() { }

  ngOnInit(): void {
  }

//este evento se ejecuta cada ves q toco el boton en la vista y tiene el valor de la pelicula
  seleccionar(event,pelicula){
this.MarcarFavorita.emit({//aca lo q se hace es emitir un evento este evento lo q hace es pasar datos mediante el Output al componente padre
  pelicula:pelicula
});//emit para emitir ese evento voy a hacer q se lance
  }

}
