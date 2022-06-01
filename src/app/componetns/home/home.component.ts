import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  user=localStorage.getItem('user')
  ngOnInit(): void {

  }
  logOut(){
    localStorage.removeItem('user')
    this.route.navigate(['/login'])
  }

}
