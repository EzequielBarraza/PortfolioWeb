import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Skill} from "../skills/Skills";
import { SKILL } from "../skills/mock-skills";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {
  @Input() skill: Skill = SKILL[0];
  @Output() onDeleteSkill: EventEmitter<Skill> = new EventEmitter()
  faTimes= faTimes;
  skillA:string='Responsabilidad';
  skillB:string='Resolución de problemas';
  skillC:string='Diseño de sistemas';
  constructor() { }

  ngOnInit(): void {
  }
toggleaddSkill(){
    console.log("toggleaddskill");
  }
  onDelete(skill: Skill){
  console.log("DELETE!");
    this.onDeleteSkill.emit(skill);
  }
}
