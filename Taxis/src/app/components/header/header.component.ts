import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import Swal from 'sweetalert2';

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
    this.varSesion = '';

    Swal.fire({
      position: 'center',
      icon: 'success',
      timerProgressBar: true,
      title:"Tancant la sessió",
      showConfirmButton: false,
      timer: 1000,
    }).then(function(){
      window.location.reload();
    });this.router.navigateByUrl('/inici');

    console.log(this.varSesion);

  }
  refresh(): void {
    window.location.reload();
  }

}
