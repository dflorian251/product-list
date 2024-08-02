import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent},
    { path: '', component: WelcomeComponent},
    { path: '**', component: PageNotFoundComponent},
];

