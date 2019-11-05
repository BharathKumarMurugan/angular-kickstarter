import { Component, OnInit } from '@angular/core';
/*importing a file*/
import { products } from './../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

  share(){
    window.alert("Your product has been shared");
  }

  onNotify(){
    window.alert("Your product will be notified when it is on sale");
  }
}
