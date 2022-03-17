import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Skill } from '../skills/Skills';
import {UiService} from 'src/app/servicios/ui.service'
import { Subscription} from 'rxjs'

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  @Output() onAddSkill: EventEmitter<Skill> = new EventEmitter()
  skill: string ="";
  showAddSkill: boolean= false;
subscription? : Subscription;
  constructor(private uiService : UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddSkill = value)}

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.skill.length ===0){
      alert("Por favor agrega una Skill!");
      return
    }
    const {skill} = this
    const newSkill = {skill}
    this.onAddSkill.emit(newSkill);
    }
}
