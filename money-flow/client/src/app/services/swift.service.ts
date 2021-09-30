import { Injectable } from '@angular/core';
import { Branch } from '../interfaces/branch.interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../../../angular/blog/src/app/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class SwiftService {
  constructor(private http: HttpClient, private userService: UserService) {}

  baseUrl = 'http://localhost:3000/swift';

  get defaultOptions() {
    return {
      headers: {
        authorization: this.userService.getToken(),
      },
    };
  }

  branches: Branch[] = [];

  fetchBranches() {
    this.http
      .get<{
        branches: Branch[];
      }>(`${this.baseUrl}/branches/fullBranchList`, this.defaultOptions)
      .subscribe(
        (data) => (this.branches = data.branches),
        (err) => console.log(err)
      );
  }

  createBranch(data: {
    name: string,
    balance: number
  }) {
    this.http.post(`${this.baseUrl}/branches/createBranch`, data, this.defaultOptions).subscribe(
      data => {
        this.fetchBranches()
      },
      err => console.log(err)
    )
  };
}
