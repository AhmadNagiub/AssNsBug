import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  fun(){
    // cy.visit('/404')
    //=> Test fails
    
    // cy.visit('/404', {failOnStatusCode: false})
    //=> Test passes but does not test the HTTP code was 404
    
    // cy.request({url: '/404', failOnStatusCode: false}).its('status').should('equal', 404)
    // cy.visit('/404', {failOnStatusCode: false})
    //=> Test passes, tests that the HTTP code was 404, and tests page was visited
  }
  back(){
    this.route.navigate(['/login'])
  }

}
