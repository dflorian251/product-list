import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product';
import { ConvertToSpacesPipe } from '../convert-to-spaces.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    CommonModule,
    ConvertToSpacesPipe,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Products List';
    listFilter: string = '';
    imageMargin: number = 2;
    imageWidth: number = 50;
    showImage: boolean = false;

    products: IProduct[] = [    
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
    ];

    toggleImage() {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('Compoenent initialized.');
    }
}
