import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
  styleUrl: './second.css'
})
export class SecondComponent implements OnInit {
  messages: string[] = [];

  constructor(private ms: MessageService) {}
  ngOnInit(): void {
    this.ms.accederMessage().subscribe(m => this.messages.push(m));
  }


}
