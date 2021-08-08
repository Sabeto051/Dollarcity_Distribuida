import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/modules/core/models/product.model';
// import { ProductsService } from 'src/app/modules/core/services/products/products.service';
import { CartService } from '../../../core/services/cart/cart.service';
import { ContentfulService } from '../../../core/services/contentful/contentful.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(
    private contentfulService: ContentfulService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: string) {
    // const product = this.products.find((prod) => prod.id === id);
    // this.cartService.addCart(product);
  }

  fetchProducts() {
    this.contentfulService.getProducts('producto').subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }
}
