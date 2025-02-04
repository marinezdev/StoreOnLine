import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) title: string = '';
  @Input({required:true}) price: number = 0.00;
  @Input({required:true}) img: string = '';

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('clic from child');
    this.addToCart.emit('mensaje para el padre desde el hijo ' + this.title + ' (product.component!');
  }
}