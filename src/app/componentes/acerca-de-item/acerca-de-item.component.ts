import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AcercaDe} from "../../data/AcercaDe";
import { ACERCA_DE } from "../acerca_de/mock-acercaDe";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-acerca-de-item',
  templateUrl: './acerca-de-item.component.html',
  styleUrls: ['./acerca-de-item.component.css']
})
export class AcercaDeItemComponent implements OnInit {
  @Input() acercaDe: AcercaDe = ACERCA_DE[0];
  @Output() onDeleteAcercaDe: EventEmitter<AcercaDe> = new EventEmitter()
  faTimes= faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(acercaDe: AcercaDe){
    console.log(acercaDe);
    this.onDeleteAcercaDe.emit(acercaDe);
  }
}
