import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-catagory',
  templateUrl: './select-catagory.component.html',
  styleUrls: ['./select-catagory.component.css']
})
export class SelectCatagoryComponent implements OnInit {
  typesOfShoes: string[] = ['Fresh Vegitables', 'Fresh Fruits', 'Fresh Care', 'Skin care', 'Shaving Care', 'Snack and Sweet'];
  constructor() { }

  ngOnInit() {
  }

  addCatagory(v) {
  
      console.log(v.selectedOptions._selected); // 1, "string", false
    

  }

}