import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private subject = new Subject<{msg: string, participant: string}>();
  envoyerMessage(msg: string, participant: string) {
    this.subject.next({msg, participant});
  }
  accederMessage() {
    return this.subject;
  }
}
