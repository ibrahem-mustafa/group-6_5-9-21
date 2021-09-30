import { Component, OnInit } from '@angular/core';
import { SwiftService } from '../../../services/swift.service';

@Component({
  selector: 'app-branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.css']
})
export class BranchesListComponent implements OnInit {

  constructor(
    private swiftService: SwiftService
  ) { }

  ngOnInit(): void {
    this.swiftService.fetchBranches();
  }

  get branches() {
    return this.swiftService.branches;
  }

}
