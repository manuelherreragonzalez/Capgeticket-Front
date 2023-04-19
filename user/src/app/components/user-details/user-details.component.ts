import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: User = new User();
  sub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  updateUser(): void {
    this.userService.updateUser(this.user).subscribe((data) => {
      alert('Usuario modificado de forma correcta.');
    });
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user);
  }

  ngOnInit(): void {
   this.sub =this.route.params.subscribe((params) => {
      const id = params['id'];
      this.userService.detailsUser(id).subscribe((user: any) => {
        this.user = user;
      });
    });
  }
}
