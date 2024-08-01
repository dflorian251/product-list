import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';
import { ConvertToSpacesPipe } from '../convert-to-spaces.pipe';
import { StarComponent } from '../star/star.component';

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
    products: IProduct[] = [    
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 5,
            "imageUrl": "assets/images/leaf_rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 3,
            "imageUrl": "assets/images/garden_cart.png"
        },
    ];

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
        console.log('Compoenent initialized.');
        this.filteredProducts = this.products;
    }
}
