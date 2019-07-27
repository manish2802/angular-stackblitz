import { Component, OnInit, ViewChild } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatPaginator, MatSort, MatTableDataSource,MatNativeDateModule} from '@angular/material';

import { VendorCatalogService } from '../../vendor-catalog/_service-vendor-catalog/vendor-catalog.service';

export interface Item {
  itemName: string;
  price: string;
  qty: string;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','qty'];
  dataSource: MatTableDataSource<Item>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

   items : Item[]=[];

  constructor(private _vendorCatalogService:VendorCatalogService) {
    this.items=this._vendorCatalogService.loadItems();
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.items);
   }

  ngOnInit() {
    //this.items=this._vendorCatalogService.loadItems();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}