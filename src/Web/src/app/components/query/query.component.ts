import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, ChatMessage } from '../../services/chat/chat.service';
import { FormatMessageContentPipe } from '../../pipes/format-message-content.pipe';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [CommonModule, FormsModule, FormatMessageContentPipe],
  templateUrl: './query.component.html',
  styleUrl: './query.component.css',
})
export class QueryComponent implements OnInit, AfterViewChecked {
  messages: ChatMessage[] = [];
  newMessage = '';
  isLoading = false;

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    // Load existing messages if any
    this.chatService.getMessages().subscribe((messages) => {
      this.messages = messages;
      this.scrollToBottom();
    });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  sendMessage(): void {
    if (!this.newMessage.trim()) return;

    this.isLoading = true;

    // Send the message and get response
    this.chatService.sendMessage(this.newMessage).subscribe({
      next: (messages) => {
        // Update UI with the user message first
        this.messages = messages;
        this.scrollToBottom();

        // Now get the system response with the delay effect
        this.chatService
          .getSystemResponseMessage(messages)
          .then((observable) => {
            observable.subscribe({
              next: (response) => {
                // After delay completes, get updated messages including system response
                this.chatService.getMessages().subscribe((messages) => {
                  this.messages = messages;
                  this.scrollToBottom();
                });

                this.isLoading = false;
              },
              error: (error) => {
                console.error('Error getting system response:', error);
                this.isLoading = false;
              },
            });
          });
      },
      error: (error) => {
        console.error('Error sending message:', error);
        this.isLoading = false;
      },
    });

    // Clear the input field
    this.newMessage = '';
  }

  clearChat(): void {
    this.chatService.clearChat();
    this.messages = [];
  }

  private scrollToBottom(): void {
    try {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop =
          this.messagesContainer.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }
}
