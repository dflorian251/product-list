import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnChanges{
    @Input() rating: number = 4;
    cropWidth: number = 75;

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }
}
