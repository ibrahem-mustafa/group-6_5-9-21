import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-default-bar',
  templateUrl: './default-bar.component.html',
  styleUrls: ['./default-bar.component.css'],
})
export class DefaultBarComponent implements OnInit {
  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  get userLoggedIn() {
    return this.userService.isLoggedIn();
  }

  get user() {
    return this.userService.getUser()
  }

  signout() {
    this.authService.signout();
    this.router.navigateByUrl('/signin')
  };
}
