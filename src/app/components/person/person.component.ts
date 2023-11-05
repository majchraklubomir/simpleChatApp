import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat/chat-service.service';
import { PersonService } from '../../services/person/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() text: string = '';
  @Input() id: number = 0;

  constructor(private chatService: ChatService) {}

  sendMessage() {
    this.chatService.sendMessage(this.id, this.text);
    this.text = '';
  }
}
