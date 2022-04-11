import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UiService} from 'src/app/servicios/ui.service'
import { Subscription} from 'rxjs'
import { AcercaDe } from '../../data/AcercaDe';

@Component({
  selector: 'app-add-acerca-de',
  templateUrl: './add-acerca-de.component.html',
  styleUrls: ['./add-acerca-de.component.css']
})
export class AddAcercaDeComponent implements OnInit {

  @Output() onAddAcercaDe: EventEmitter<AcercaDe> = new EventEmitter()
 
  texto: string ="";
  showAddAcercaDe: boolean= false;
subscription? : Subscription;
  constructor(private uiService : UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddAcercaDe = value)}

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.texto.length ===0){
      alert("Please add a Educación!");
      return
    }
    const {texto} = this
    const newAcercaDe = {texto}
    this.onAddAcercaDe.emit(newAcercaDe);
    }
}
