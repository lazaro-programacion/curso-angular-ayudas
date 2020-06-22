import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  sendMessage(msg: any) {
    console.log("emit",msg)
    this.socket.emit('message', msg);
  }

  getMessages() : Observable<any[]>{
    return this.socket.fromEvent('messages');

  }

}
