import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {

                this.accountsService.statusUpdated.subscribe(
                  (status: string) => alert('New Status: '+ status)
                );

                this.accountsService.typeUpdated.subscribe(
                  (type: string) => alert('New Type: ' + type)
                );
              }

  onCreateAccount(accountName: string, bankName: string, accountNo: number, accountBalance: number, cardNumber: number, accountType: string, accountStatus: string, fixedDeposit: number) {
    this.accountsService.addAccount(accountName, bankName, accountNo, accountBalance, cardNumber, accountType, accountStatus, fixedDeposit);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
