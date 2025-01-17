import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  standalone: true,
  imports: [MatTableModule, CurrencyPipe],
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent {
  @Input() products: Product[] = [];

  displayedColumns: string[] = ['id', 'sku', 'name', 'cost'];
}
