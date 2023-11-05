import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messages: { id: number, message: string }[] = [];
  private messagesSubject = new Subject<{ id: number, message: string }[]>();

  sendMessage(id: number, message: string) {
    const newMessage = { id, message };
    this.messages = [...this.messages, newMessage];
    this.messagesSubject.next([...this.messages]);
  }

  getMessages(): Observable<{ id: number, message: string }[]> {
    return this.messagesSubject.asObservable();
  }

  clearMessages() {
    this.messages = [];
    this.messagesSubject.next([]);
  }
}
