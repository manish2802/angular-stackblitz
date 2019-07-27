import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { OrderItem } from '../../vendor-home/order/order-item';
import { Order } from '../../vendor-home/order/order';
import { OrderService } from '../../services/order.service';



@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.css']
})
export class ActiveOrderComponent implements OnInit {

  private subscription: Subscription;

  constructor(private _orderService: OrderService) {
  console.log('ActiveOrderComponent constructor');

   }

  orderItems: OrderItem[];
  count: number=0;;


  ngOnInit(){ 
  
   console.log('ActiveOrderComponent ngOnInit');
    this
      ._orderService
      .orderState
      .subscribe((state: Order) => {
        console.log('Active Order State item : '+JSON.stringify(state.orderItems));
        this.orderItems = state.orderItems;

        // for (var i = 0; i < this.orderItems.length; i++) {
        //   if (this.orderItems[i].order_status == 'Awaiting Process') {
        //     this.orderItems[i].order_status = 'In Progress';                  
        //   } 
        // }
        this.count = this.orderItems.length;
        console.log(this.orderItems);
      });
  }
}