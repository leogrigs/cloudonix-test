import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewProduct, Product } from 'src/app/interfaces/product.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CloudoNixHttpService {
  private http = inject(HttpClient);

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/items`);
  }

  public addProduct(product: NewProduct): Observable<Product> {
    return this.http.post<Product>(`${environment.apiBaseUrl}/items`, product);
  }

  public editProduct(
    productId: number,
    product: Partial<NewProduct>
  ): Observable<Product> {
    return this.http.patch<Product>(
      `${environment.apiBaseUrl}/items/${productId}`,
      product
    );
  }

  public deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.apiBaseUrl}/items/${productId}`
    );
  }
}
