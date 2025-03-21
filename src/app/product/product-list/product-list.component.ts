import { Product } from './../product';
import { filter } from 'rxjs';
import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/productservice.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
// constructor(private ps:ProductserviceService)
// {

//   this.ps.somemethod();
//   console.log(this.ps.message)

// }
constructor(private ps:ProductserviceService){}

  addtocart()
  {
    this.ps.updateCartCount();
  }

  
// it is used to skip the initilization
  products!:Product[];
  errorMessage !:string;

  // for getter/setter
  private _searchText=''
  
  // getter for searchText variable
  get searchText():string{
    return this._searchText;
  }


  // setter for searchText variable
  set searchText(value:string)
  {
  this._searchText=value;

  this.filterProduct(this._searchText) 
  }

  copyOfProducts!:Product[];
  filterProduct(filterValue:string)
  {
    this.copyOfProducts=this.products.filter(p=>p.name.toLowerCase()
                                .includes(filterValue.toLocaleLowerCase()))
}

  ngOnInit():void{
    this.ps.readAll().subscribe({

      next:data=>{
        this.products=data;
        this.copyOfProducts=this.products;
      },
      error:err=>this.errorMessage=err
    
  })

}

}
