import { Component } from "@angular/core";
@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online{
        color: white;
    }
    `]
})
export class ServerComponent{
    serverName :string = 'Global Server';
    serverId : number = 10;
    serverStatus :string = 'offline';

    constructor(){
        this.serverStatus = Math.random()>0.5 ? 'online':'offline';
    }
    getServerName(){
        return this.serverName;
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === 'offline' ? 'red':'green'; 
    }
}