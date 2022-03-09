import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
title: string= 'Soft & Hard Skills';
skillA:string='Responsabilidad';
skillB:string='Resolución de problemas';
skillC:string='Diseño de sistemas';
  constructor() { }

  ngOnInit(): void {
  }

}
