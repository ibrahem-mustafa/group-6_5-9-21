import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { DefaultBarComponent } from './components/bars/default-bar/default-bar.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BranchesListComponent } from './components/swift/branches-list/branches-list.component';
import { BranchesListItemComponent } from './components/swift/branches-list-item/branches-list-item.component';
import { TransactionListComponent } from './components/swift/transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './components/swift/transaction-list-item/transaction-list-item.component';
import { ActionsBarComponent } from './components/bars/actions-bar/actions-bar.component';
import { CreateBranchModalComponent } from './components/swift/create-branch-modal/create-branch-modal.component';
import { CreateTransactionModalComponent } from './components/swift/create-transaction-modal/create-transaction-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    DefaultBarComponent,
    HomeComponent,
    BranchesListComponent,
    BranchesListItemComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    ActionsBarComponent,
    CreateBranchModalComponent,
    CreateTransactionModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
