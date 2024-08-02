import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent},
    { path: 'products/:id', component: ProductDetailComponent},
    { path: '', component: WelcomeComponent},
    { path: '**', component: PageNotFoundComponent},
];

