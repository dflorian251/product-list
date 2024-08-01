import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';
import { ConvertToSpacesPipe } from '../convert-to-spaces.pipe';
import { StarComponent } from '../star/star.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    CommonModule,
    ConvertToSpacesPipe,
    StarComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Products List';
    imageMargin: number = 2;
    imageWidth: number = 50;
    showImage: boolean = false;

    private _listFilter: string = '';

    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];

    constructor(private productService: ProductService) {}

    toggleImage() {
        this.showImage = !this.showImage;
    }

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        console.log('Setter: ', value);
        this.filteredProducts = this.performFilter(value);
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((pruduct: IProduct) => {
            return pruduct.productName.toLocaleLowerCase().includes(filterBy);
        });
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }
}
