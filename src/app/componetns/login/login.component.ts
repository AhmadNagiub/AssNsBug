import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isStyleInvalid={'background-color':'#17a2b8','border-color':'#17a2b8'}
  isStyleValid={'background-color':'gray','border-color':'gray'}
  socials=[
    {
      icon:'../../../assets/goggle.png',
      name:'Google',
      iconbg:'white',
      iconColor:'white',
      bg:'#4285F4'
    },
    {
      icon:'../../../assets/github.png',
      name:'GitHub',
      iconbg:'black',
      iconColor:'white',
      bg:'black'
    },
    {
      icon:'../../../assets/micrsoft.png',
      name:'Microsoft',
      iconbg:'white',
      iconColor:'black',
      bg:'white'
    }
  ]
  msg=''
  users=[
    { email: 'mohamed@instabug.com', password: 'A12345678' },
    { email: 'mohamed1@instabug.com', password: 'A12345678' },
    { email: 'mohamed2@instabug.com', password: 'A12345678' },
    { email: 'mohamed3@instabug.com', password: 'A12345678' },
    { email: 'mohamed4@instabug.com', password: 'A12345678' },
    { email: 'mohamed5@instabug.com', password: 'A12345678' },
    { email: 'mohamed6@instabug.com', password: 'A12345678' },
    { email: 'mohamed7@instabug.com', password: 'A12345678' },
    ]
  constructor(private route:Router) { }

    login = new FormGroup({
    password: new FormControl(null,[ Validators.required,Validators.minLength(6),Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)]),
    email: new FormControl(null,[ Validators.required,Validators.email])
  });
  formData(){
    console.log(this.login?.value)
    for(let i = 0 ; i< this.users?.length ; i++){

      if(this.login.value.email == this.users[i].email && this.login.value.password==this.users[i].password){
        localStorage.setItem('user', this.users[i].email);
        this.route.navigate(['/home'])
        
      }
      else{
        this.msg='Email or password is invalid'
      }
    }

  }
  errorCheck(controlName:any){
    return this.login.get(controlName)?.errors && this.login.get(controlName)?.touched
  }
  ngOnInit(): void {
 }




}
