import { Component, inject } from '@angular/core';
import { Product } from './interfaces/product.interface';
import { CloudoNixHttpService } from './services/cloudonix-http/cloudonix-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private cloudonixHttp = inject(CloudoNixHttpService);

  public products: Product[] = [];

  public login(): void {
    this.cloudonixHttp.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
