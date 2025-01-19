import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
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
  private snackBar = inject(MatSnackBar);

  public products$: Observable<Product[]> = this.cloudonixHttp.getProducts();

  public updateProducts(): void {
    this.products$ = this.cloudonixHttp.getProducts();
  }

  public editProduct(product: Product): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);

        this.cloudonixHttp.editProduct(product.id, result).subscribe({
          next: () => {
            this.updateProducts();
            this.openSnackBar('Product updated successfully');
          },
        });
      }
    });
  }

  public addProduct(): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      data: null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cloudonixHttp.addProduct(result).subscribe({
          next: () => {
            this.updateProducts();
            this.openSnackBar('Product added successfully');
          },
        });
      }
    });
  }

  public deleteProduct(product: Product): void {
    this.cloudonixHttp.deleteProduct(product.id).subscribe({
      next: () => {
        this.updateProducts();
        this.openSnackBar('Product deleted successfully');
      },
    });
  }

  public openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
    });
  }
}
