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

import { ButtonComponent } from './componentes/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { ProyectosComponent } from './componentes/proyectos/proyectos.component';




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
    
    ButtonComponent,
  
    
    ProyectosComponent,
    
    
   
    
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
