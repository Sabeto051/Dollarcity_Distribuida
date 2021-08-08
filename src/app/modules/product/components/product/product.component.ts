import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  @Output() productClicked: EventEmitter<string>;

  today = new Date();

  constructor() {
    this.productClicked = new EventEmitter();
  }

  ngOnInit() {}

  addCart() {
    this.productClicked.emit(this.product['fields']['nombre']);
  }
}
