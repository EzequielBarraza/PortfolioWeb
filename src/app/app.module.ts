import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/heaeder/header.component';
import { Acerca_DeComponent } from './componentes/acerca_de/acerca_de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { ExperienciaItemComponent } from './componentes/experiencia-item/experiencia-item.component';
import { ButtonComponent } from './componentes/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Acerca_DeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    FooterComponent,
    LoginComponent,
    ExperienciaItemComponent,
    ButtonComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [AppComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
