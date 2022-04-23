import { Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/servicios/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PortfolioWeb';
  isUserLogged: boolean = false;
  constructor( private authService: AuthService) {}
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
  }
}
