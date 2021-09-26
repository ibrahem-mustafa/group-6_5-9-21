import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { USER } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) { }

  signin(data: { email: string, password: string }) {
    this.http.post<{
      user: USER,
      token: string
    }>('http://localhost:3000/auth/signin', data).subscribe(
      response => {
        this.userService.setUser(
          response.user,
          response.token
        );

        this.router.navigateByUrl('/')
      },
      err => console.log(err)
    )
  }

  signup(data: { name: string, email: string, password: string }) {
    this.http.post('http://localhost:3000/auth/signup', data).subscribe(
      data => {
        this.router.navigateByUrl('/signin')
      },
      err => console.log(err)
    )
  }

  signout() {
    this.userService.clear();
    this.router.navigateByUrl('/signin');
  }
}
