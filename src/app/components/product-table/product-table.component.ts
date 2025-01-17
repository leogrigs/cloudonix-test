import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule, CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    CurrencyPipe,
    JsonPipe,
    MatIconModule,
  ],
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ProductTableComponent {
  @Input() products: Product[] = [];

  displayedColumns: string[] = ['id', 'sku', 'name', 'cost'];
  displayedColumnsWithExpand: string[] = [...this.displayedColumns, 'expand'];
  expandedElement: any | null = null;

  toggleExpand(element: any): void {
    this.expandedElement = this.expandedElement === element ? null : element;
  }
}
