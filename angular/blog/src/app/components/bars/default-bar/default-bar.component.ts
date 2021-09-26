import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-default-bar',
  templateUrl: './default-bar.component.html',
  styleUrls: ['./default-bar.component.css']
})
export class DefaultBarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  get userLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  signout() {
    this.authService.signout();
  }

}
