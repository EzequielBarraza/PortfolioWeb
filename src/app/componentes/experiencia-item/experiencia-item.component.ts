import { Component, OnInit } from '@angular/core';
import {Experiencia} from "../experiencia/Experiencia"
import { EXPERIENCIA } from "../experiencia/mock-experiencia";
import {ButtonComponent} from "../button/button.component"
@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
  experiencias: Experiencia[] = EXPERIENCIA;
  constructor() { }

  ngOnInit(): void {
  }

}
