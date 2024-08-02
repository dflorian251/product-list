import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductModule } from './products/product.module';


@NgModule({
  declarations: [
    AppComponent,
    // ProductListComponent,
    // ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    // ProductModule,
  ],
})
export class AppModule { }
