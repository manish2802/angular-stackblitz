import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CustomerRegistrationService {

 constructor(private _http: HttpClient) { }

   customerRegistration(){

     console.log('customerRegistration Service');
   }

}