import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public messages: any[] = [];
  public message: string;
  public username: string;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getMessages().subscribe(
      data => {
        console.log('data', data);
        this.messages = data;
      }

    );
  }

  enviar = () => {
    this.chatService.sendMessage({msg: this.message, user: this.username});
  }

}
