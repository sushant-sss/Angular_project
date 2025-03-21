import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReviewComponent } from './review/review.component';
import { NotificationComponent } from './notification/notification.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes:Routes=[
  
  {path:"products",component:ProductListComponent },
  {path:"products/add",component:AddProductComponent},
  {path:"product/:id",component:ProductDetailsComponent,
  children:[
    {path:'review',component:ReviewComponent},
    {path:'notification',component:NotificationComponent}
  ]
},
{path:"products/:id/edit",component: UpdateProductComponent}
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ReviewComponent,
    NotificationComponent,
    AddProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductModule { }
