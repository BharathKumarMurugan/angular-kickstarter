import { Component, OnInit } from '@angular/core';

/*importing input to get input from the parent component*/
import { Input } from '@angular/core';
/*importing output to send output to the parent component*/
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

    @Input() product;
    @Output() notify=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
