import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca_de',
  templateUrl: './acerca_de.component.html',
  styleUrls: ['./acerca_de.component.css']
})
export class Acerca_DeComponent implements OnInit {
nombre= 'Hola Soy Ezequiel Barraza'
acercaDe='Programador Web Full Stack & Docente'
  constructor() { } 

  ngOnInit(): void {
  }

}

