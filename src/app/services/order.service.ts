import { Injectable } from '@angular/core';
import { OrderItem } from './../vendor-home/order/order-item';
import { Order } from './../vendor-home/order/order';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs/observable/timer';
import { concatMap, map, merge, } from 'rxjs/operators';


@Injectable()
export class OrderService {

  private loadOrderSubject = new Subject<Order>();
  private orderSubject = new Subject<Order>();
  private rejOrderSubject = new Subject<Order>();

  loadOrderItems: OrderItem[] = [];
  loadOrderState = this.loadOrderSubject.asObservable();

  orderItems: OrderItem[] = [];
  orderState = this.orderSubject.asObservable();

  rejOrderItems: OrderItem[] = [];
  rejOrderState = this.rejOrderSubject.asObservable();

  
  refResponse:OrderItem[] = [];
  polledOrders: Observable<OrderItem[]>;
  manualRefresh = new Subject<Order>();
  
  //url="https://murkyrecursivefreesoftware.manish2802.repl.co/listUsers";
  url = "https://api.myjson.com/bins/m8p1g";
  //url="http://localhost:8081/vendor";
   

  constructor(private _http: HttpClient) {
  }


  loadOrders(): OrderItem[] {
    console.log('Enter into : ' + 'loadOrders' + ' OrderService');
    this.loadOrderItems = [{ index: 0, order_id: 'order_1', order_status: 'Awaiting Process' }, { index: 1, order_id: 'order_2', order_status: 'Awaiting Process' }, { index: 2, order_id: 'order_3', order_status: 'Awaiting Process' }, { index: 3, order_id: 'order_4', order_status: 'Awaiting Process' }];

    return this.loadOrderItems;
  }



  // Call Service
  loadOrdersService() {
    console.log('Enter into : ' + 'loadOrdersService' + ' OrderService');
    return this._http.get<OrderItem[]>(this.url).subscribe(res => {
      this.loadOrderItems = res;
      this.loadOrderSubject.next(<Order>{ loaded: true, orderItems: this.loadOrderItems });
    });;
  }


  //call Service Periodcally
  loadOrdersServicePeriodically() {
    console.log('Enter into : ' + 'loadOrdersServicePeriodically' + ' OrderService');
    const orderItem$ = this._http.get<OrderItem[]>(this.url);
    
    this.polledOrders = timer(0,10000).pipe(
      merge(this.manualRefresh),
      concatMap(_ => orderItem$ ),
      map(response =>this.refResponse= response)
    );


     this.polledOrders.subscribe(res => {  
     let loadOrderItems: OrderItem[] = [];       
    
     this.loadOrderItems=res;

     this.loadOrderSubject.next(<Order>{ loaded: true, orderItems: this.loadOrderItems });
      console.log('periodically data: '+res);
    });;
  }

  addAcceptOrder(_product: any) {
    console.log('Enter into : ' + 'addAcceptOrder ' + 'OrderService');


     this._http.post(this.url+'/accept-orders',_product)
        .subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
        ); 



    if (_product.order_status == 'Awaiting Process') {
      _product.order_status = 'In Progress';
    }
    this.orderItems.push(_product);
    this.orderSubject.next(<Order>{ loaded: true, orderItems: this.orderItems });

    this.loadOrderItems = this.loadOrderItems.filter(function (product: OrderItem) { return product.order_id !== _product.order_id });
    this.loadOrderSubject.next(<Order>{ loaded: true, orderItems: this.loadOrderItems });

    console.log('After Accept LoadOrder ' + JSON.stringify(this.loadOrderItems));
  }




  refreshAcceptOrder(order_id: string) {
    console.log('Enter into : ' + 'refreshAcceptOrder ' + 'OrderService');
    this.loadOrderItems = this.loadOrderItems.filter((_item) => _item.order_id !== order_id)
    console.log(this.loadOrderItems);
  }


  rejectedOrder(_product: any) {
    console.log('Enter into : ' + 'rejectedOrder ' + 'OrderService');

    if (_product.order_status == 'Awaiting Process') {
      _product.order_status = 'Rejected';
    }
    this.rejOrderItems.push(_product);
    this.rejOrderSubject.next(<Order>{ loaded: true, orderItems: this.rejOrderItems });

    this.loadOrderItems = this.loadOrderItems.filter(function (product: OrderItem) { return product.order_id !== _product.order_id });
    this.loadOrderSubject.next(<Order>{ loaded: true, orderItems: this.loadOrderItems });
    console.log('After Reject LoadOrder ' + JSON.stringify(this.loadOrderItems));

  }



}