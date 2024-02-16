import { Routes } from '@angular/router';
import { isAuthenticatedGuardGuard } from './core/guards/isAuthenticatedGuard.guard';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./pages/auth/logIn/logIn.component').then( c => c.LogInComponent )
  },
  {
    path: 'layout',
    loadComponent: () => import('./pages/layoutPage/layoutPage.component').then(c => c.LayoutPageComponent),
    canActivate: [ isAuthenticatedGuardGuard ],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/homePage/homePage.component').then( c => c.HomePageComponent )
      },
      {
        path: 'electronics',
        loadComponent: () => import('./pages/electronics/electronicts-page/electronicts-page.component').then( c => c.ElectronictsPageComponent ),
      },
      {
        path: 'product/:id',
        loadComponent: () => import('./pages/productDetail/productDetail.component').then( c => c.ProductDetailComponent )
      },
      {
        path: 'jewelery',
        loadComponent: () => import('./pages/jewelery/jeweleryPage/jeweleryPage.component').then( c => c.JeweleryPageComponent )
      },
      {
        path: 'men',
        loadComponent: () => import('./pages/men/mensClothingPage/mensClothingPage.component').then( c => c.MensClothingPageComponent )
      },
      {
        path: 'women',
        loadComponent: () => import('./pages/women/womensClothingPage/womensClothingPage.component').then( c => c.WomensClothingPageComponent )
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },

];
