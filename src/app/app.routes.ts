import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'products', component: ProductListComponent},
];

