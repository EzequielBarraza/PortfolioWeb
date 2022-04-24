import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from './componentes/portfolio/portfolio.component'
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { Acerca_DeComponent } from './componentes/acerca_de/acerca_de.component';
import { ExperienciaComponent} from './componentes/experiencia/experiencia.component';
import { EducacionComponent} from './componentes/educacion/educacion.component';
import { SkillsComponent} from './componentes/skills/skills.component';
import { FooterComponent} from './componentes/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import {ProyectosComponent} from './componentes/proyectos/proyectos.component'

const routes: Routes = [
  
  
  {path: 'login', component: LoginComponent},
  {path: 'home', component: PortfolioComponent},
 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
