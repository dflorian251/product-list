import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";

    constructor (private route: ActivatedRoute) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));

        this.pageTitle += `: ${id}`;
    }
}
