import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../../vendor-home/order/order-item';
import { OrderService } from '../../services/order.service';



@Component({
  selector: 'app-completed-order',
  templateUrl: './completed-order.component.html',
  styleUrls: ['./completed-order.component.css']
})
export class CompletedOrderComponent implements OnInit {

 
  constructor(private _orderService: OrderService) { }

  orderItems: OrderItem[];
  count : number;

  isAccepted :boolean;
 
  ngOnInit() {
   this.orderItems = [];
   this.orderItems=this._orderService.loadOrders();

    for (let i = 0; i < this.orderItems.length; i++) {
     
        if (this.orderItems[i].order_status == 'Awaiting Process') {
          this.orderItems[i].order_status = 'Completed';
        }
      }


   this.count=this.orderItems.length;
   this.isAccepted=true;
  }

}