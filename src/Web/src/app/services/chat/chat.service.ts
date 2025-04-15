import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'system';
  timestamp: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messages: ChatMessage[] = [];
  private messageId = 0;

  constructor() {}

  // Get all messages
  getMessages(): Observable<ChatMessage[]> {
    return of(this.messages);
  }

  sendMessage(content: string): Observable<ChatMessage[]> {
    // Create and store user message
    const userMessage: ChatMessage = {
      id: `msg_${++this.messageId}`,
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    this.messages.push(userMessage);

    return of(this.messages);
  }

  // Mock AI response for now
  async getSystemResponseMessage(
    currentMessages: ChatMessage[]
  ): Promise<Observable<ChatMessage>> {
    // This is a placeholder. In a real application, you would call your backend API here.
    let response = '';
    const question = currentMessages[currentMessages.length - 1].content;

    // Simulate network delay - force the function to wait for 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simple mock responses based on keywords
    if (
      question.toLowerCase().includes('hello') ||
      question.toLowerCase().includes('hi')
    ) {
      response = 'Hello! How can I help you today?';
    } else if (question.toLowerCase().includes('help')) {
      response =
        'I can help you find information, answer questions, or assist with any queries you have.';
    } else if (
      question.toLowerCase().includes('data') ||
      question.toLowerCase().includes('report')
    ) {
      response =
        'I can provide reports and analyze data for you. What specific information are you looking for?';
    } else {
      response = `I've received your query about "${question}". In a real implementation, I would connect to the backend API to provide a meaningful response.`;
    }

    // Create system message
    const systemMessage: ChatMessage = {
      id: `msg_${++this.messageId}`,
      content: response,
      sender: 'system',
      timestamp: new Date(),
    };

    // Add the system message to our messages array
    this.messages.push(systemMessage);

    // Return the system message with a delay to simulate network request
    return of(systemMessage);
  }

  // Clear all messages
  clearChat(): void {
    this.messages = [];
    this.messageId = 0;
  }
}
