import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public title: string;
  public user: any;
  constructor() {
    
    //this.usuario = new ContactoUsuario('','','','');
    this.user = {
      nombre:'',
      apellidos:'',
      bio:'',
      genero:''
    };

    this.title = 'Formulario';
   }

  ngOnInit(): void {
  }

  onSubmit(){
alert('formulario hijo de puta');
  }

}
