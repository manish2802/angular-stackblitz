import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';

import {MatNativeDateModule} from '@angular/material';
import {MaterialModule} from './material/material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { routing }        from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { ProductCatageroryComponent } from './customer-product-category/product-catagerory.component';
import { ProductListComponent } from './customer-product-list/product-list.component';
import { CustomerLoginService } from './customer-login/customer-login.service';
import { VendorListComponent } from './vendor-list/vendor-list.component';

import { HttpClientModule } from '@angular/common/http';
import { CustomerRegistrationService } from './customer-registration/customer-registration.service';
import { OrderComponent } from './vendor-home/order/order.component';
import { NewOrderComponent } from './vendor-home/neworder/neworder.component';
import { ActiveOrderComponent } from './vendor-home/active-order/active-order.component';
import { CompletedOrderComponent } from './vendor-home/completed-order/completed-order.component';
import { OrderItemsListComponent } from './vendor-home/order-items-list/order-items-list.component';
import { IntegrationOrderComponent } from './vendor-home/integration-order/integration-order.component';
import { RejectedOrderComponent } from './vendor-home/rejected-order/rejected-order.component';
import { ReturnedOrderComponent } from './vendor-home/returned-order/returned-order.component';


import { OrderService } from './services/order.service';
import { VendorHeaderComponent } from './vendor-home/vendor-header/vendor-header.component';
import { VendorNavbarComponent } from './vendor-home/vendor-navbar/vendor-navbar.component';
import { VendorDashboardComponent } from './vendor-home/vendor-dashboard/vendor-dashboard.component';
import { ItemService } from './services/item.service';
import { AddItemComponent } from './vendor-catalog/add-item/add-item.component';
import { ItemListComponent } from './vendor-catalog/item-list/item-list.component';
import { IntegrationVendorCatalogComponent } from './vendor-catalog/integration-vendor-catalog/integration-vendor-catalog.component';
import { VendorCatalogService } from './vendor-catalog/_service-vendor-catalog/vendor-catalog.service';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { SelectCatagoryComponent } from './vendor-catalog/select-catagory/select-catagory.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GetAllCatagoryItemsComponent } from './vendor-catalog/get-all-catagory-items/get-all-catagory-items.component';
import { CatgoryItemComponent } from './vendor-catalog/catgory-item/catgory-item.component';
import { CatagoryItemService } from './vendor-catalog/_service-vendor-catalog/catagory-item.service';


@NgModule({
  imports:      [ BrowserModule,FormsModule, ReactiveFormsModule,routing, HttpClientModule,MaterialModule,BrowserAnimationsModule,MatNativeDateModule],
  declarations: [ AppComponent, CustomerLoginComponent, CustomerRegistrationComponent, 
 HelloComponent  , VendorRegistrationComponent, VendorLoginComponent, ProductCatageroryComponent, ProductListComponent, VendorListComponent, OrderComponent, NewOrderComponent, ActiveOrderComponent, CompletedOrderComponent, OrderItemsListComponent, IntegrationOrderComponent, RejectedOrderComponent, ReturnedOrderComponent, VendorHeaderComponent, VendorNavbarComponent, VendorDashboardComponent, AddItemComponent, ItemListComponent, IntegrationVendorCatalogComponent, SelectCatagoryComponent, CustomerHomeComponent, AdminLoginComponent, AdminDashboardComponent,GetAllCatagoryItemsComponent, CatgoryItemComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CustomerLoginService, CustomerRegistrationService, OrderService, ItemService, VendorCatalogService, CatagoryItemService]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
