import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {

  @Input() account: {name: string, b_name: string, account_no: number, account_balance: number, card_number: number, type: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}

  onSetTo(status: string) {
    
    this.accountsService.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }

  onSet(type: string) {
    this.accountsService.updateType(this.id, type);
    this.accountsService.typeUpdated.emit(type);
  }
}
