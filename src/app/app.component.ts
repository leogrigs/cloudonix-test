import { Component, inject, OnInit } from '@angular/core';
import { Product } from './interfaces/product.interface';
import { CloudoNixHttpService } from './services/cloudonix-http/cloudonix-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private cloudonixHttp = inject(CloudoNixHttpService);

  public products: Product[] = [];

  public ngOnInit(): void {
    this.cloudonixHttp.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
