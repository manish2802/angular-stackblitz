import { Component, OnInit } from '@angular/core';


export class Item {
  itemId: string;
  itemName: string;
  quantity: number;
}



@Component({
  selector: 'app-get-all-catagory-items',
  templateUrl: './get-all-catagory-items.component.html',
  styleUrls: ['./get-all-catagory-items.component.css']
})

export class GetAllCatagoryItemsComponent implements OnInit {

loadOrderItems: Item[] = [];

//this.loadOrderItems = [{ itemId: '101', itemName: 'order_1', quantity: 5}];


constructor() { }

ngOnInit() {
  }

}