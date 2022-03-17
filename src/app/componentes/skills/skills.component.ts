import { Component, OnInit } from '@angular/core';
import {DatosPortfolioService} from "../../servicios/datos-portfolio.service";
import {Skill} from "../skills/Skills";
import {UiService} from 'src/app/servicios/ui.service'
import { Subscription } from 'rxjs';
import {Router, Routes} from '@angular/router'


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];
title: string= 'Soft & Hard Skills';
showAddSkill: boolean = true;
  subscription?: Subscription;
constructor(private uiService : UiService,
  private router: Router,
  private datosPortfolioService: DatosPortfolioService
) {this.subscription = this.uiService.onToggle().subscribe(value => this.showAddSkill = value)}

  ngOnInit(): void {
    this.datosPortfolioService.getSkill().subscribe((skill) => (this.skill = skill));
  }
  toggleAddSkill(){
    console.log("toggle add skill");
    this.uiService.toggleAddSkill();
  }
  deleteSkill(skill: Skill){
    this.datosPortfolioService.deleteSkill(skill)
    .subscribe(
      () => (
      this.skill = this.skill.filter((t) => {
      return t.id !== skill.id })
    ))
      }
      addSkill(skill:Skill) {
        this.datosPortfolioService.addSkill(skill).subscribe((skill) => ( this.skill.push(skill)
        ))
       }
       hasRoute(route:string){
        return this.router.url === route;
      }
    }
