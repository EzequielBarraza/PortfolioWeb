import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  title: string= 'Proyectos'
  proyectoPortfolioWeb: string= 'Portfolio Web'
  proyectoTaskList: string= 'Task List'
  constructor() { }

  ngOnInit(): void {
  }

}
