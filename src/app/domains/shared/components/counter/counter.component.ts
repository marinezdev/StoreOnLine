import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { windowTime } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = ''; 
  counter = signal(0);
  counterRef: number | undefined;

  constructor() 
  {
    // NO ASYNC // before render // only once
    console.log('constructor');
    console.log('-'.repeat(15));
  }

  ngOnChanges(changes: SimpleChanges) 
  {
    // before and during render
    console.log('ngOnChange');
    console.log(changes);
    console.log('-'.repeat(15));

    const duration = changes['duration'];
    console.log(duration);
    if (duration && (duration.currentValue != duration.previousValue))
    {
      this.doSomething();
    }
  }

  ngOnInit() 
  {
    // after render // only once // async & tehn subscribe objects
    console.log('ngOnInit');
    console.log('-'.repeat(15));

    // timer
    this.counterRef = window.setInterval(() => {
      this.counter.update(statePrev => statePrev + 1);
      console.log('run interval: ' + this.counter);
    }, 1000);
  }

  ngAfterViewInit()
  {
    // after render // si los componentes hijo ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(15));
  }

  ngOnDestroy()
  {
    // after render // si los componentes hijo ya fueron renderizados
    console.log('ngOnDestroy');
    console.log('-'.repeat(15));
    window.clearInterval(this.counterRef);
  }

  doSomething() 
  {
    // async
    console.log('duration changed to: ' + this.duration);
  }
}
