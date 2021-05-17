import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  varSesion: any;

  constructor(private router: Router) {
    this.varSesion=environment.varsesion;
  }

  ngOnInit(): void {
  }

  logout(){
    setTimeout(() => {
      this.router.navigateByUrl('/ingres');
    }, 700);
    this.varSesion='';
  }

}
