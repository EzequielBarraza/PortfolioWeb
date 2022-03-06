import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
title= 'Soft & Hard Skills';
skillA='Responsabilidad';
skillB='Resolución de problemas';
skillC='Diseño de sistemas';
  constructor() { }

  ngOnInit(): void {
  }

}
