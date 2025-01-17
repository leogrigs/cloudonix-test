import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule, CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
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
    MatMenuModule,
    MatButtonModule,
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
  @Output() onEditProduct = new EventEmitter<Product>();
  @Output() onDeleteProduct = new EventEmitter<Product>();

  public displayedColumns: string[] = ['id', 'sku', 'name', 'cost', 'actions'];
  public displayedColumnsWithExpand: string[] = [
    ...this.displayedColumns,
    'expand',
  ];
  public expandedElement: any | null = null;

  public toggleExpand(element: any): void {
    this.expandedElement = this.expandedElement === element ? null : element;
  }
}
