import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = ''; 

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
  }

  ngOnInit() 
  {
    // after render // only once // async & tehn subscribe objects
    console.log('ngOnInit');
    console.log('-'.repeat(15));
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
  }
}
