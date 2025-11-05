import { Component, Input } from '@angular/core';
import { TweetService } from '../../services/tweet';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-participant',
  imports: [FormsModule],
  templateUrl: './participant.html',
  styleUrl: './participant.css'
})
export class ParticipantComponent {
  @Input() nom: string = '';

  message = '';
  messages: string[] = [];
  
  constructor(private ms: TweetService) {}
  
  ngOnInit(): void {
    this.ms.accederMessage().subscribe(({msg, participant}) => {
      if(participant != this.nom) {
        this.messages.push(msg)
      }

    });
  }

  envoyer() {
    this.ms.envoyerMessage(this.message, this.nom);
    this.message = '';
  }



}
