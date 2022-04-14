import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppWindow} from '../../data/appWindow';
import {HttpClient} from '@angular/common/http';
import {Product} from './model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input()
  public window: AppWindow;

  @Output()
  public windowMinimize = new EventEmitter<void>();

  @Output()
  public windowMaximize = new EventEmitter<void>();

  @Output()
  public windowClose = new EventEmitter<void>();

  public products: Product[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get('./assets/products/products.csv', {responseType: 'text'})
      .subscribe(
        data => {
          const rows = data.split('\r\n');
          for (let i = 0; i < rows.length; i++) {
            const line = rows[i].split(';');
            if (line.length === 3) {
              this.products.push(new Product(line[0], line[1], line[2]));
            }
          }
          console.log(this.products);
        },
        error => {
          console.log(error);
        }
      );
  }

}
