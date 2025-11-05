import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, of, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.html',
  styleUrl: './subject.css'
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
    const subject = new ReplaySubject<number>(2)
    subject.subscribe({
      next: v => console.log(`A: ${v}`)
    })
    subject.next(0)
    subject.next(1)

    subject.subscribe({
      next: v => console.log(`B: ${v}`)
    })

    subject.next(2)
    subject.subscribe({
      next: v => console.log(`C: ${v}`)
    })

    subject.next(3)


    // const subject = new Subject<number>()
    // // const observable$ = of(10, 20, 30)
    // const observable$ = from([10, 20, 30])
    // subject.subscribe({
    //   next: v => console.log(`A: ${v}`)
    // })
    // subject.next(0)
    // subject.subscribe({
    //   next: v => console.log(`B: ${v}`)
    // })
    // // subject joue le rôle de l'observable
    // subject.next(1)
    // subject.next(2)
    // // subject jour le rôle de l'observer
    // observable$.subscribe(subject)
  }

}
