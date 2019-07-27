import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ItemService {

  //url = "https://api.myjson.com/bins/m8p1g";
  //url="http://localhost:8081/vendor/customer-orders";

  constructor(private _http: HttpClient) {
  }

}