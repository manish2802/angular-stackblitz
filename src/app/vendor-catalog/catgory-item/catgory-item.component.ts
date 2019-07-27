import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import { CatagoryItemService } from '../_service-vendor-catalog/catagory-item.service';

@Component({
  selector: 'app-catgory-item',
  templateUrl: './catgory-item.component.html',
  styleUrls: ['./catgory-item.component.css']
})
export class CatgoryItemComponent implements OnInit {

   @Input() catagoryItem : Catagoryitem;

    constructor(private _catagoryItemService : CatagoryItemService) {}
    AddProduct(_product : catagoryItem) {
        _product.added = true;
        // this
        //     ._catagoryItemService
        //     .addProduct(_product);
    }
    RemoveProduct(_product : catagoryItem) {
        _product.added = false;
        // this
        //     ._catagoryItemService
        //     .removeProduct(_product.id);
    }

}