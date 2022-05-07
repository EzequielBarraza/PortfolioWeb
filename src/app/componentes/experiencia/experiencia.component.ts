import { Component, OnInit } from '@angular/core';
import {Experiencia} from "../../data/Experiencia";
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


 @Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: Experiencia[] = [];
  isUserLogged: Boolean = false;

  experienciaForm: FormGroup;
   
  constructor(private porfolioService: PortfolioService,
    private authService: AuthService,
    private formBuilder: FormBuilder) {
      this.experienciaForm = this.formBuilder.group({
          id: [''],
          cargo: ['', [Validators.required]],
          institucion: ['', [Validators.required]],
          periodo: ['', [Validators.required]],
          
        });
   }
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
    
    this.reloadData();
  }

  private reloadData() {
    this.porfolioService.obtenerDatosExperiencia().subscribe(
      (data) => {
        this.experienciaList = data;
      }
    );
  }

  private clearForm() {
    this.experienciaForm.setValue({
      id: '',
      cargo: '',
      institucion: '',
      periodo: '', 
      
      
    })
  }

  private loadForm(experiencia: Experiencia) {
    this.experienciaForm.setValue({
      id: experiencia.id,
      cargo: experiencia.cargo,
      institucion: experiencia.institucion,
      periodo: experiencia.periodo,
     
      
    })
  }

  onSubmit() {
    let experiencia: Experiencia = this.experienciaForm.value;
    if (this.experienciaForm.get('id')?.value == '') {
      this.porfolioService.guardarNuevaExperiencia(experiencia).subscribe(
        (newExperiencia: Experiencia) => {
          this.experienciaList.push(newExperiencia);
        }
      );
    } else {
      this.porfolioService.modificarExperiencia(experiencia).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

  onNewExperiencia() {
    this.clearForm();
  }

  onEditExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    this.loadForm(experiencia);
  }

  onDeleteExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    if (confirm("¿Está seguro que desea borrar la educación seleccionada?")) {
      this.porfolioService.borrarExperiencia(experiencia.id).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

}


