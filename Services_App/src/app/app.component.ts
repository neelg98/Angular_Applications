import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  accounts: {name: string, b_name: string, account_no: number, account_balance: number, card_number: number, type: string, status: string, fixed_deposit: number}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}