import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const productDetailGuard: CanActivateFn = (route, state) => {
    const id  = Number(route.paramMap.get('id'));
    if (isNaN(id) || id < 1) {
        alert('Invalid product id.');
        const router = inject(Router);
        router.navigate(['/products']);
    }
    return true;
};
