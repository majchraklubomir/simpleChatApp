import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat/chat-service.service';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent implements OnInit {
  persons: { id: number, message: string }[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe((messages) => {
      this.persons = messages;
    });
  }

  clearMessages() {
    this.chatService.clearMessages();
  }
}
