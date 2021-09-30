import { Component, Input, OnInit } from '@angular/core';
import { Branch, defaultBranch } from '../../../interfaces/branch.interface';

@Component({
  selector: 'app-branches-list-item',
  templateUrl: './branches-list-item.component.html',
  styleUrls: ['./branches-list-item.component.css']
})
export class BranchesListItemComponent implements OnInit {
  @Input() branch: Branch = defaultBranch;

  constructor() { }

  ngOnInit(): void {
  }

}
