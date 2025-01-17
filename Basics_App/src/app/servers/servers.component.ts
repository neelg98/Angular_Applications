import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewFriend = false;
  friendCreationStatus = 'No friend was added';
  friendName = '';
  friendCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewFriend = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateFriend(){
    this.friendCreated = true;
    this.friendCreationStatus='Friend is added!, Name is '+ this.friendName;
  }

  onUpdateFriendName(event:Event){
    this.friendName = (<HTMLInputElement>event.target).value;
  }
}
