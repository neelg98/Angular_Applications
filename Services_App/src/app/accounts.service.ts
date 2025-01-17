import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {

    accounts = [
        {
          name: 'Neel Ashwin Gohil',
          b_name: 'State Bank of India (SBI)',
          account_no: 38463573814,
          account_balance: 54010,
          card_number: 5103720496816099,
          fixed_deposit: 0,
          type: 'Savings',
          status: 'Active'
        },
        {
          name: 'Neel Ashwin Gohil',
          b_name: 'Industrial Credit & Investment Corporation of India (ICICI)',
          account_no: 0,
          account_balance: 0,
          card_number: 0,
          fixed_deposit: 0,
          type: 'Savings',
          status: 'Inactive'
        }
      ];

      statusUpdated = new EventEmitter<string>();
      typeUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService) {}

      addAccount(name: string, b_name: string, account_no: number, account_balance: number, card_number: number, type: string, status: string, fixed_deposit: number) {
          this.accounts.push({name: name, b_name: b_name, account_no: account_no, account_balance: account_balance, card_number: card_number, type: type, status: status, fixed_deposit: fixed_deposit});
          this.loggingService.logStatusChange(status);
          this.loggingService.logTypeChange(type);
      }

      updateStatus(id: number, status: string) {
          this.accounts[id].status = status;
          this.loggingService.logStatusChange(status);
      }

      updateType(id: number, type: string) {
        this.accounts[id].type = type;
        this.loggingService.logTypeChange(type);
      }
}