import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  info:any = {"usuario":"user", "senha":"1234"}

  constructor(private router:Router) { }

  public usuario:any
  public senha:any

  ngOnInit(): void {
    this.autenticar    
  }

  autenticar() {
    if(this.info.usuario === this.usuario && this.info.senha === this.senha) {
      this.router.navigate(['characters'])
    }else{
      alert('Usuário ou senha incorretos!')
    }
  }

}
