import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewProduct, Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CloudoNixHttpService {
  private http = inject(HttpClient);

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'http://rest-items.research.cloudonix.io/items'
    );
  }

  public addProduct(product: NewProduct): Observable<Product> {
    return this.http.post<Product>(
      'http://rest-items.research.cloudonix.io/items',
      product
    );
  }

  public editProduct(
    productId: number,
    product: Partial<NewProduct>
  ): Observable<Product> {
    return this.http.patch<Product>(
      `http://rest-items.research.cloudonix.io/items/${productId}`,
      product
    );
  }

  public deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(
      `http://rest-items.research.cloudonix.io/items/${productId}`
    );
  }
}
