import { OrderItem } from '../../vendor-home/order/order-item';

export interface Order {

 loaded: boolean;
 orderItems : OrderItem[];
}