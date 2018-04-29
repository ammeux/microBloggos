import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app.config';
import { Message } from '../message';

@Injectable()
export class MessageService {

  private readMessagesUrl = appConfig.apiUrl + '/message/' + localStorage.getItem('username');
  private createMessageUrl = appConfig.apiUrl + '/message/' + localStorage.getItem('username');
  private deleteMessageUrl = appConfig.apiUrl + '/message/' + localStorage.getItem('username');

  constructor(private http: HttpClient) { }

  readMessages() {
    return this.http.get(this.readMessagesUrl);
  }

  createMessage(newMessage: Message) {
    return this.http.post(this.createMessageUrl, newMessage);
  }

  deleteMessage(dropMessage) {
    return this.http.delete(this.deleteMessageUrl + '/' + dropMessage);
  }
}
