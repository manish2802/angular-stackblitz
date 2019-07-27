import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../../vendor-home/order/order-item';
import { OrderService } from '../../services/order.service';
import { Order } from '../../vendor-home/order/order';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.css']
})
export class NewOrderComponent implements OnInit {
  orderItems: OrderItem[];
  count: number;
  isAccepted: boolean;

  constructor(private _orderService:OrderService ) {
        console.log('NewOrderComponent constructor');
      

  }
  

  ngOnInit() {
     console.log('NewOrderComponent ngOnInit');
    this.isAccepted = false;
    
    //this.orderItems=this._orderService.loadOrders();
    this._orderService.loadOrdersService();
    //this._orderService.loadOrdersServicePeriodically();
  
     this._orderService.loadOrderState.subscribe((state: Order) => {
        console.log('New Order State item : '+JSON.stringify(state.orderItems));
        this.orderItems=state.orderItems;
        this.count = this.orderItems.length;
      
      });



    //        this.orderItems = [{ order_id: 'order_1', order_status: 'Awaiting Process' }, { order_id: 'order_2', order_status: 'Awaiting Process' }, { order_id: 'order_3', order_status: 'Awaiting Process' }, { order_id: 'order_4', order_status: 'Awaiting Process' }];;

  }

}