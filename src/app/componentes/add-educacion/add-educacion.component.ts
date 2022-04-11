import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UiService} from 'src/app/servicios/ui.service'
import { Subscription} from 'rxjs'
import { Educacion } from '../../data/Educacion';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {
  @Output() onAddEducacion: EventEmitter<Educacion> = new EventEmitter()
  Title: string ="Titulo";
  School: string="Instituto";
  Start: string ="Inicio de Carerra";
  End: string="Final de Carrera"
  title: string ="";
  school: string="";
  start: string="" ;
  end: string="";
  showAddEducacion: boolean= false;
subscription? : Subscription;
  constructor(private uiService : UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddEducacion = value)}

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.title.length ===0){
      alert("Please add a Educación!");
      return
    }
    const {title, school, start, end} = this
    const newEducacion = {title, school, start,end}
    this.onAddEducacion.emit(newEducacion);
    }
}
