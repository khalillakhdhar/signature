import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {
user:User;
rmdp:string;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user=new User();
  }
  add()
  {
    this.user.grade="user";
    const us=Object.assign({},this.user);
    this.userService.create_NewUser(us);
    this.user=new User();
alert("inscription avec succés");
  }


}
