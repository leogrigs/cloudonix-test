import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, MatDividerModule, TitleCasePipe],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() description: string | undefined;
  @Input() profile: Record<string, any> | null = null;
  objectKeys = Object.keys;
}
