import { Component, OnInit } from '@angular/core';
import { SwiftService } from '../../../services/swift.service';

@Component({
  selector: 'app-create-branch-modal',
  templateUrl: './create-branch-modal.component.html',
  styleUrls: ['./create-branch-modal.component.css'],
})
export class CreateBranchModalComponent implements OnInit {
  showCreateBranchModal: boolean = false;

  name: string = '';
  balance: number = 0;

  get createBranchModalStyle() {
    return {
      display: this.showCreateBranchModal ? 'block' : 'none',
    };
  }

  constructor(
    private swiftService: SwiftService
  ) {}

  ngOnInit(): void { }
  
  createBranch() {

    this.swiftService.createBranch({
      name: this.name,
      balance: this.balance,
    });

    this.name = '';
    this.balance = 0;

    this.showCreateBranchModal = false;
  } 
}
