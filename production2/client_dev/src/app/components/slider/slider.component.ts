import { Component, OnInit,Input } from '@angular/core';//Input para poder usar el decorador con los valores del componente padre

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

//@Input() para poder usar los componentes variables etc..q vienen del componente padre
@Input() nombre:string;
@Input() size:string;

  constructor() { }

  ngOnInit(): void {
  }

}
