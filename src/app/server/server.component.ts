import { Component } from "@angular/core";
@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    serverName :string = 'Global Server';
    serverId : number = 10;
    serverStatus :string = 'offline';

    getServerName(){
        return this.serverName;
    }
}