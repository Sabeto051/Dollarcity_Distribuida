import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CognitoService } from 'src/app/modules/core/services/cognito/cognito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  total$: Observable<number>;

  constructor(
    private cartService: CartService,
    private router: Router,
    private cognito: CognitoService
  ) {
    this.total$ = this.cartService.cart$.pipe(map((prod) => prod.length));
  }

  logout() {
    this.cognito.signOut().then(() => {
      this.router.navigate(['/auth/login']);
    });
  }
}
