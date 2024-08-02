import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router, RouterModule } from '@angular/router';
import { IProduct } from '../product-list/product';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    NgIf,
    RouterModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";

    product: IProduct | undefined;

    constructor (private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));

        this.pageTitle += `: ${id}`;
    }

    onBack() : void {
        this.router.navigate(['/products']);
    }
}
