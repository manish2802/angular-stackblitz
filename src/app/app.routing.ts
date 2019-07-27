
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomerLoginComponent } from './customer-login/customer-login.component';

import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { OrderComponent } from './vendor-home/order/order.component';
import { NewOrderComponent } from './vendor-home/neworder/neworder.component';
import { IntegrationOrderComponent } from './vendor-home/integration-order/integration-order.component';
import { OrderItemsListComponent } from './vendor-home/order-items-list/order-items-list.component';
import { ItemListComponent } from './vendor-catalog/item-list/item-list.component';
import { SelectCatagoryComponent } from './vendor-catalog/select-catagory/select-catagory.component';
import { AddItemComponent } from './vendor-catalog/add-item/add-item.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GetAllCatagoryItemsComponent } from './vendor-catalog/get-all-catagory-items/get-all-catagory-items.component';



const appRoutes: Routes = [
    { path: '', component: IntegrationOrderComponent },
    { path: 'login', component: CustomerLoginComponent },
    { path: 'register', component: CustomerRegistrationComponent },
    { path: 'order', component: NewOrderComponent },
    { path: 'order-item', component: OrderItemsListComponent },
    { path: 'item-list', component: ItemListComponent },
    { path: 'add-item', component: AddItemComponent },
    { path:'select-catgory',component:SelectCatagoryComponent},
    { path:'admin-login',component:AdminLoginComponent},
    { path:'admin-dashboard',component:AdminDashboardComponent},
    { path:'get-all-catagory-item',component:GetAllCatagoryItemsComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);






// import { RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { CustomerLoginComponent } from './customer-login/customer-login.component';

// import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';


// @NgModule({
//   declarations: [ 
//     CustomerLoginComponent, CustomerRegistrationComponent
//   ],
//   imports: [
//     RouterModule.forRoot([
//       { path: 'login', component: CustomerLoginComponent },
//       { path: 'register', component: CustomerRegistrationComponent },
//       { path: '**', redirectTo: 'login' }
//     ])
//   ],
//   exports: [
//     RouterModule,
//   ],
//   providers: [],

// })
// export class AppRoutingModule {}
