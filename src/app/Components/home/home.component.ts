import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  
  numero:any;
  nombre_variable:number=0;
  vector: string[] = [];
  ngOnInit(): void {
    this.numero=1;
    this.vector= []
    
  }

}
total(){
  let numero1:number=0;
  var numero2:number=2;
  this.router.navegate(['compag1'])
}

navegar(){
  let variable:number=0;
  var nombre_variable=0;
  this.router.navegate(['compag1'])
}

navegacion(){
  this.router.navegate([])
}
