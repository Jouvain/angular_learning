import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../services/message';

@Component({
  selector: 'app-first',
  imports: [FormsModule],
  templateUrl: './first.html',
  styleUrl: './first.css'
})
export class FirstComponent {
  message = '';

  constructor(private ms: MessageService) {}

  envoyer() {
    this.ms.envoyerMessage(this.message);
    this.message = '';
  }
}
