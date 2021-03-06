import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from './modules/shared/shared.module';

// Guardians
import { AdminGuard } from './guardians/admin/admin.guard';
import { CognitoGuard } from './guardians/cognito/cognito.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [CognitoGuard],
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./modules/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./modules/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./modules/order/order.module').then((m) => m.OrderModule),
      },
    ],
  },
  // {
  //   path: 'admin',
  //   canActivate: [AdminGuard],
  //   loadChildren: () =>
  //     import('./modules/admin/admin.module').then((m) => m.AdminModule),
  // },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // { path: 'demo', component: DemoComponent },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    SharedModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
