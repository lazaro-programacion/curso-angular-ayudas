import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  public message$: Observable<any>;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    this.message$ = this.messageService.getMessage();
  }

}
