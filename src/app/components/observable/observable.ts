import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Observer, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.html',
  styleUrl: './observable.css'
})
export class ObservableComponent implements OnInit, OnDestroy {

  numbers: number[] = []
  status = ''
  subscription: Subscription | null = null;
  ngOnInit(): void {
    const observable$: Observable<number> = interval(1000).pipe(
      map(v => v + 2),
      filter(v => v % 2 == 0),
      take(10),
    )
    this.subscription = observable$.subscribe({
      next: (value) => this.numbers.push(value),
      error: (err) => this.status = err,
      complete: () => this.status = 'fini'
    })

    // observable$.subscribe({
    //   next: value => console.log(`A : ${value}`)
    // })
    // setTimeout(
    //   () => observable$.subscribe({
    //     next: value => console.log(`B : ${value}`)
    //   }),
    //   5000
    // )

    // const observer: Observer<number> = {
    //   next: (value) => this.numbers.push(value),
    //   error: (err) => this.status = err,
    //   complete: () => this.status = 'fini'
    // }
    // observable$.subscribe(observer)
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
