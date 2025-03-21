import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
   constructor(private route:ActivatedRoute,
               private ps:ProductserviceService,
               private router:Router    
   ){}
    myobservable$ !:Observable<any>
    id !:number
  
    ngOnInit(): void {
      this.route.params.subscribe(params=>this.id=params['id'])
      this.myobservable$=this.ps.readOne(this.id);
    }

    goBack()
    {
      this.router.navigate(['/products'])
    }

    deleteProduct(id:number)
    {
      this.ps.delete(id).subscribe(data=>this.router.navigate(['/products']))
    }
}
