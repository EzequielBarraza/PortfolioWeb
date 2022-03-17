import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UiService} from 'src/app/servicios/ui.service'
import { Subscription} from 'rxjs'
import { Educacion } from '../educacion/Educacion';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  @Output() onAddEducacion: EventEmitter<Educacion> = new EventEmitter()
  titulo: string ="";
  instituto: string="";
  expedicion: string ="";
  showAddEducacion: boolean= false;
subscription? : Subscription;
  constructor(private uiService : UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddEducacion = value)}

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.titulo.length ===0){
      alert("Please add a Educación!");
      return
    }
    const {titulo, instituto, expedicion} = this
    const newEducacion = {titulo, instituto, expedicion}
    this.onAddEducacion.emit(newEducacion);
    }
}
