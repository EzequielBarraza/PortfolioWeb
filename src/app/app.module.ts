import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { Acerca_DeComponent } from './componentes/acerca_de/acerca_de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { ExperienciaItemComponent } from './componentes/experiencia-item/experiencia-item.component';
import { ButtonComponent } from './componentes/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SkillsItemComponent } from './componentes/skills-item/skills-item.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

import { AddExperienciaComponent } from './componentes/add-experiencia/add-experiencia.component';
import { AddSkillComponent } from './componentes/add-skill/add-skill.component';
import { AcercaDeItemComponent } from './componentes/acerca-de-item/acerca-de-item.component';
import { AddAcercaDeComponent } from './componentes/add-acerca-de/add-acerca-de.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Acerca_DeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    FooterComponent,
    LoginComponent,
    ExperienciaItemComponent,
    ButtonComponent,
  
    SkillsItemComponent,
    ProyectosComponent,
    
    AddExperienciaComponent,
    AddSkillComponent,
    AcercaDeItemComponent,
    AddAcercaDeComponent,
    PortfolioComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, FontAwesomeModule, HttpClientModule
  ],
  providers: [AppComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
