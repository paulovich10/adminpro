import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  public intervaloSubs: Subscription;

  constructor() {
    this.intervaloSubs = this.retornaIntervalo().subscribe(console.log);

    // this.returnObservable().pipe(
    //   retry()
    // ).subscribe(
    //   valor => console.log('subs:', valor),
    //   error => console.warn('Error:', error),
    //   () => console.info('obs terminado')

    // )

  }

  ngOnDestroy() {
    this.intervaloSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(500).pipe(
      take(50),
      map(valor => valor + 1),
      filter(valor => (valor % 2 === 0) ? true : false),

    )


  }



  // returnObservable() {
  //   let i = -1;
  //   return new Observable(observer => {

  //     const intervalo = setInterval(() => {
  //       i++;
  //       observer.next(i);
  //       if (i === 4) {
  //         clearInterval(intervalo);
  //         observer.complete();
  //       }
  //       if (i === 2) {
  //         observer.error('i es igual a 2')
  //       }
  //     }, 1000)
  //   });
  // }


}
