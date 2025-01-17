import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [{type: 'server', name: 'Hotstar Project Application Server', content: 'It was the EC2 Instance where our entire application was running!'},
                    {type: 'server', name: 'Local Angular Applications Server', content: 'It is the local instance where self build angular projects are running!'},
                    {type: 'server', name: 'RecipeBook Project Application Server', content: 'It is the local instance where this project is running!'},
                    {type: 'blueprint', name: 'Ice Project Development Server', content: 'It is the development server where changes are committed!'},
                    {type: 'server', name: 'Ice Project Production Server', content: 'It is the production server where actual application is running!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
    type: 'blueprint',
    name: blueprintData.serverName,
    content: blueprintData.serverContent
  });
}
}
