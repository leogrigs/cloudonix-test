import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { Product } from './interfaces/product.interface';
import { CloudoNixHttpService } from './services/cloudonix-http/cloudonix-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private cloudonixHttp = inject(CloudoNixHttpService);
  private dialog = inject(MatDialog);

  public products: Product[] = [];

  public login(): void {
    this.cloudonixHttp.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  public editProduct(product: Product): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Updated product:', result);
      }
    });
  }

  public addProduct(): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      data: null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Created product:', result);
      }
    });
  }

  public deleteProduct(product: Product): void {
    console.log('Deleting product:', product);
  }
}
