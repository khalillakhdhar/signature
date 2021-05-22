import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User;
users:User[];
correcte=false;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    localStorage.clear();
    this.user=new User();
    this.read();
  }
  read()
  {
    this.userService.read_Users().subscribe(data => {

      this.users = data.map(e => {
        return {
         id: e.payload.doc.id,
  
        
         nom: e.payload.doc.data()["nom"],
         prenom: e.payload.doc.data()["prenom"],
         email: e.payload.doc.data()["email"],
         mdp: e.payload.doc.data()["mdp"],
         rib: e.payload.doc.data()["rib"],
         cin: e.payload.doc.data()["cin"],
         grade: e.payload.doc.data()["grade"],
         adresse: e.payload.doc.data()["adresse"],
         age: e.payload.doc.data()["age"],
  
  
  
        };
      });
      console.log("users",this.users);
    });
  }
  verif()
  {
    for(let us of this.users)
    {
      if((us.email==this.user.email)&&(us.mdp==this.user.mdp))
      {
        localStorage.setItem("grade",us.grade);
        localStorage.setItem("id",us.id);
        this.correcte=true;
        window.location.replace("/dashboard");
      }


    }
    if(!this.correcte)
    alert("email ou mot de passe incorrectes")
  }
}
