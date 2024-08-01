import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class AppModule { }
