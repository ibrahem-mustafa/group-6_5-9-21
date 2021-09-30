import { Component, OnInit } from '@angular/core';
import { SwiftService } from '../../../services/swift.service';

@Component({
  selector: 'app-create-transaction-modal',
  templateUrl: './create-transaction-modal.component.html',
  styleUrls: ['./create-transaction-modal.component.css'],
})
export class CreateTransactionModalComponent implements OnInit {
  showModal = false;

  type = 'expense';
  amount: number = 10;
  fromId: string = '';
  toId: string = '';
  note: string = '';
  constructor(private swiftService: SwiftService) {}

  ngOnInit(): void {}

  get branches() {
    return this.swiftService.branches;
  }

  get fromBranches() {
    return this.branches;
  }

  get toBranches() {
    return this.branches.filter(branch => branch._id != this.fromId)
  }

  get modalStyle() {
    return {
      display: this.showModal ? 'block' : 'none',
    };
  }

  createTransaction() {

    this.swiftService.createTransaction({
      type: this.type,
      amount: this.amount,
      fromId: this.fromId,
      toId: this.toId,
      note: this.note,
    });

    this.type = 'expense'
    this.amount = 0;
    this.fromId = '';
    this.toId = '';
    this.note = '';
    this.showModal = false;
  }
}
