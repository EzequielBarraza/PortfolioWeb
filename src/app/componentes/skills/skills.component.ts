import { Component, OnInit } from '@angular/core';
import {DatosPortfolioService} from "../../servicios/datos-portfolio.service";
import {Skill} from "../skills/Skills";
import { SKILL } from "../skills/mock-skills";


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];
title: string= 'Soft & Hard Skills';

  constructor(private datosPortfolioService: DatosPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolioService.getSkill().subscribe((skill) => (this.skill = skill));
  }
  toggleaddskill(){
    console.log("toggleaddskills");
  }
  deleteSkill(skill: Skill){
    this.datosPortfolioService.deleteSkill(skill)
    .subscribe(
      () => (
      this.skill = this.skill.filter((t) => {
      return t.id !== skill.id })
    ))
      }}
