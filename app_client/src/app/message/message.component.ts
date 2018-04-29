import { Component, OnInit } from '@angular/core';
import { MessageService} from '../_services/message.service';
import { Message } from '../message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  private messages: any;
  private newMessage: Message;

  constructor(private messageService: MessageService)  { }

  ngOnInit() {
    this.read();
    this.newMessage = new Message();
  }

  // Classical CRUD for Messages

  read(): void {
    this.messageService.readMessages()
      .subscribe(
        (data) => {
          this.messages = data;
        },
        error => {
          console.log('Failed to subscribe message');
          console.log(error);
        }
      );
  }

  create(): void {
    this.messageService.createMessage(this.newMessage)
      .subscribe(
        () => {
          console.log('Succeeded to subscribe createMessage');
          this.messages.push(this.newMessage);
          this.newMessage = new Message();
        },
        error => {
          console.log('Failed to subscribe createMessage');
          console.log(error);
        }
      );
  }

  delete(dropMessage): void {
    this.messageService.deleteMessage(dropMessage)
      .subscribe(
        () => {
          console.log('Succeeded to subscribe deleteMessage');
          this.read();
        },
        error => {
          console.log('Failed to subscribe deleteMessage');
          console.log(error);
        }
      );
  }
}
