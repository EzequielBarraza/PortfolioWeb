import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/servicios/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLogged: boolean = false;
  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    
    this.isUserLogged = this.authService.isUserLogged();
  }

  logout(): void {
    this.authService.logout();
    this.isUserLogged = false;
    window.location.reload();
  }

}
