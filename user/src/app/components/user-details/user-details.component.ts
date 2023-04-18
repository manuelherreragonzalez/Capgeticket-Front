import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router, private userService: UserService) {

  }

  updateUser(): void {
    this.userService.updateUser(this.user)
      .subscribe(data => {
        alert("Usuario modificado de forma correcta.");
      });

  };

  deleteUser(user:User): void {
    this.userService.deleteUser(user)
  };


  ngOnInit(): void {

  }
}
