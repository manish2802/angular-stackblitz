import { Injectable } from '@angular/core';
import { Item } from '../../vendor-catalog/item-list/item-list.component';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class VendorCatalogService {

  items: Item[] = [];


  url = "https://api.myjson.com/bins/m8p1g";
  
   

  constructor(private _http: HttpClient) {
  }

  public  loadItems(): Item[] {

    console.log('Enter into : ' + 'loadItems' + ' OrderService');
    this.items = [{ itemName: 'item1',price:'50',qty:'20' }, { itemName: 'item2',price:'40',qty:'20' },{ itemName: 'item3',price:'80',qty:'20' }, { itemName: 'item4',price:'20',qty:'20' },{ itemName: 'item5',price:'50',qty:'20' }, { itemName: 'item6',price:'50',qty:'20' },{ itemName: 'item7',price:'50',qty:'20' }, { itemName: 'item8',price:'50',qty:'20' },{ itemName: 'item9',price:'4',qty:'20' }, { itemName: 'item10',price:'52',qty:'20' },{ itemName: 'item11',price:'54',qty:'20' }, { itemName: 'item12',price:'80',qty:'20' },{ itemName: 'item13',price:'50',qty:'20' }, { itemName: 'item14',price:'58',qty:'20' }];


    return this.items;
  }

}