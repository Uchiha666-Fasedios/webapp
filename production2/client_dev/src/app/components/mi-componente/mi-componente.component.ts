import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html'
 
 
  
})
export class Micomponente {

public title: string;
public coment: string;
public year: number;

  constructor() {
    this.title='sos hermosa malaspina';
    this.coment='me gustaria q seas mia';
    this.year=2020;
    console.log('mi componente creado');
    console.log(this.title,this.coment)
  }
}