import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductserviceService } from 'src/app/productservice.service';
import { forbiddenValidators } from '../forbidden-validators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

addForm!:FormGroup;
ngOnInit(): void {
    this.addForm=new FormGroup({
      name:new FormControl('',[Validators.required,
                               Validators.minLength(5),
                               forbiddenValidators('apple')]),

      price:new FormControl('',[Validators.required,
                                Validators.min(1),
                                Validators.max(1000)
      ]),
      description:new FormControl(''),
      imageUrl:new FormControl('/assets/images/img1.jpg')
    })
  }
  get f()
  {
    return this.addForm.controls;
  }

  constructor(private ps:ProductserviceService){}
  addProduct()
  {
    this.ps.insert(this.addForm.value).subscribe(data=>console.log("inserted"))
  }

}