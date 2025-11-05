import { Component } from '@angular/core';
import { ParticipantComponent } from '../participant/participant';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tchat',
  imports: [ParticipantComponent, ReactiveFormsModule],
  templateUrl: './tchat.html',
  styleUrl: './tchat.css'
})
export class TchatComponent {

  participants: ParticipantComponent[] = [];
  participantForm: FormGroup 

  constructor(private fb: FormBuilder) {
    this.participantForm = this.fb.group({
      nom: ""
    });
  }

  ajouterParticipant() {
    this.participants.push(this.participantForm.value);
    this.participantForm.reset();
  }

}
