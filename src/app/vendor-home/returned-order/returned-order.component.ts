import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../../vendor-home/order/order-item';

@Component({
  selector: 'app-returned-order',
  templateUrl: './returned-order.component.html',
  styleUrls: ['./returned-order.component.css']
})
export class ReturnedOrderComponent implements OnInit {

    constructor() { }

  orderItems: OrderItem[];
  count : number;

  isAccepted :boolean;
 
  ngOnInit() {
   this.orderItems = [];
   this.count=this.orderItems.length;
   this.isAccepted=true;
  }

}