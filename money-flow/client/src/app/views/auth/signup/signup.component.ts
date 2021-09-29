import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.signup({
      name: this.name,
      email: this.email,
      password: this.password,
    });
  }

}
