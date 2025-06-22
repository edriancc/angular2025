import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Message {
  author: string;
  text: string;
  id: number;
}

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages: Message[] = [
   {
      author: 'User1',
      text: 'Hello, how are you?',
      id: 1
    },
    {
      author: 'User2',
      text: 'I am fine, thank you! And you?',
      id: 2
    },
    {
      author: 'User1',
      text: 'I am doing well, just busy with work.',
      id: 3
    },
    {
      author: 'User2',
      text: 'I understand, work can be hectic sometimes.',
      id: 4
    }
  ]
  
  sendMessage(){
    console.log('Message sent');
    console.log(this.form_state);
    this.messages.push({
      author: this.form_state.author,
      text: this.form_state.text,
      id: this.messages.length + 1
    });
    this.form_state.author = '';
    this.form_state.text = '';
  }

  form_state = {
    author: '',
    text: ''
  };
}
