import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products/products.service';
import { CartService } from './services/cart/cart.service';
import { AuthService } from './services/auth/auth.service';
import { ContentfulService } from './services/contentful/contentful.service';
import { CognitoService } from './services/cognito/cognito.service';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, AmplifyUIAngularModule],
  providers: [
    ProductsService,
    CartService,
    AuthService,
    ContentfulService,
    CognitoService,
  ],
})
export class CoreModule {}
