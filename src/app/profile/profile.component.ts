import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:User;
users:User[];
id:string;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.id=localStorage.getItem("id");
    this.user=new User();
    this.users=[];
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
      this.getprofile();
    });
   

  }
  getprofile()
  {
    for(let us of this.users)
    {
      if(this.id==us.id)
      this.user=us;
    }
    console.log("current",this.user);

  }
  update()
  {
    let usr=Object.assign({},this.user);
    this.userService.update_User(this.id,this.user);
    alert("mis à jours avec succés");
  }
}
