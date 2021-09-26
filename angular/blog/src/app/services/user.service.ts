import { Injectable } from '@angular/core';
import { USER } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  setUser(userData: USER, token: string) {
    window.localStorage.setItem('user', JSON.stringify(userData))
    window.localStorage.setItem('token', `Bearer ${token}`)
  }
  
  getUser() {
    const userData = window.localStorage.getItem('user');
    if (!userData) return null;
    return JSON.parse(userData);
  }

  getToken() {
    return window.localStorage.getItem('token')!
  }

  // !!true => !false => true
  // !!{...} => !!true => !false => true
  // !!false => !true => false

  isLoggedIn(): boolean {
    return !!this.getUser();
  }


  clear() {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
  }

}
