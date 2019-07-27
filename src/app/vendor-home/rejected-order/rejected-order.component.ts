import { Component, OnInit } from '@angular/core';

import { Order } from '../../vendor-home/order/order';
import { OrderItem } from '../../vendor-home/order/order-item';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-rejected-order',
  templateUrl: './rejected-order.component.html',
  styleUrls: ['./rejected-order.component.css']
})
export class RejectedOrderComponent implements OnInit {

  constructor(private _orderService: OrderService) { }

  orderItems: OrderItem[];
  count: number=0;

  ngOnInit() {


    this._orderService.rejOrderState.subscribe((state: Order) => {

      this.orderItems = state.orderItems;
      // for (var i = 0; i < this.orderItems.length; i++) {
     
      //   if (this.orderItems[i].order_status == 'New') {
      //     this.orderItems[i].order_status = 'Rejected';
      //   }
      // }

     
      this.count = this.orderItems.length;
      console.log(this.orderItems);
    });




  }

}