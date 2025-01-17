import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html', 
    styles: []
})
export class ServerComponent {
    allowStatus = false;
    status = '';
    statusChange : boolean;
    invalidAnswer = false;

    constructor(){
        setTimeout(() => {
            this.allowStatus = true;
          }, 2000);
    }

    onStatus(){
        if(this.status == 'Yes' || this.status == 'YES' || this.status == 'yes'){
            this.statusChange = true;
            this.status='Status Change!, Now it is '+ this.status;
        } else if(this.status == 'No' || this.status == 'NO' || this.status == 'no'){
            this.statusChange = false;
            this.status='Status Change!, Now it is '+ this.status;
        } else {
            this.invalidAnswer = true
            this.status = 'Please enter a valid answer!'
        } 
    }
    
    onUpdateStatus(event:Event){
        this.status = (<HTMLInputElement>event.target).value;
    }  
}