import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit{

  user: User = new User();

  constructor(private router: Router, private userService: UserService) {

  }

  addUser(): void {
    this.userService.addUser(this.user)
      .subscribe(data => {
        this.router.navigate(['/list']);
        alert("Usuario generado de forma correcta.");
      });

  };
  
  ngOnInit(): void {

  }
}
