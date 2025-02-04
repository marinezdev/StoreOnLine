import { Component, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './../../../shared/components/counter/counter.component';
import { WaveAudioComponent } from './../../components/wave-audio/wave-audio.component'

@Component({
  selector: 'app-about',
  imports: [CommonModule, CounterComponent, WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('Hola');

  durationChange(event: Event) 
  {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  messageChange(event: Event) 
  {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
