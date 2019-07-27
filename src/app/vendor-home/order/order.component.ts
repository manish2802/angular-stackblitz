import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from './order-item';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() order: OrderItem;

  constructor(private _orderService: OrderService) {

  }


  ngOnInit() {


  }

  acceptOrder(_order: OrderItem) {
    console.log('Enter into :' + 'acceptOrder ' + 'OrderComponent');

    this._orderService.addAcceptOrder(_order);   

  }


  rejectProduct(_order: OrderItem) {
    this._orderService.rejectedOrder(_order);
    console.log(_order);

  }


}