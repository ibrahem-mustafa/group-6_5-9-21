import { Component, Input, OnInit } from '@angular/core';
import { Transaction, defaultTransaction } from '../../../interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.css']
})
export class TransactionListItemComponent implements OnInit {
  @Input() transaction: Transaction = defaultTransaction;
  constructor() { }

  ngOnInit(): void {
  }

}
