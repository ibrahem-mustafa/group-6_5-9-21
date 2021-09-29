import { Injectable } from '@angular/core';
import { USER } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setUser(user: USER, token: string) {
    window.localStorage.setItem('user', JSON.stringify(user));
    window.localStorage.setItem('token', `Bearer ${token}`);
  }

  getUser() {
    const user = window.localStorage.getItem('user')
    if (!user) return null;
    return JSON.parse(user);
  }

  getToken() {
    return window.localStorage.getItem('token')!
  }

  isLoggedIn() {
    return !!this.getUser();
  }

  clear() {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
  }
}
