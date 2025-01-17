import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CloudoNixHttpService {
  private http = inject(HttpClient);

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'http://rest-items.research.cloudonix.io/items',
      {
        headers: {
          Authorization: 'Bearer 01234567890',
        },
      }
    );
  }
}
