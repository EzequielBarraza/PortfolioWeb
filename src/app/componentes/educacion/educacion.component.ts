import { Component, OnInit } from '@angular/core';
import {Educacion} from "./Educacion"
import { EDUCACION } from "./mock-educacion";

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educacion :Educacion [] = EDUCACION;
title='Educación';

  constructor() { }

  ngOnInit(): void {
  }

}
