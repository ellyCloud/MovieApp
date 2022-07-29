import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  delete() {
    this.messages = [];
  }

  constructor() {}
}
