import { Injectable, } from '@angular/core';
import { catchError, Observable, Subject, throwError} from 'rxjs';
import { Product } from './product/product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  // num=10;
  // message="hello";
  // somemethod()
  // {
  //   console.log("this is service method....")
  // }
  
  countsubject$=new Subject<number>();
  updatedCartCount=0;
  updateCartCount()
  {
    this.updatedCartCount++;
    this.countsubject$.next(this.updatedCartCount);
  }

  constructor(private http:HttpClient){}

  //featching the product API..
  readAll():Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiUrl}/product`)
                    .pipe(catchError((error:HttpErrorResponse)=>{
      return throwError("error occured while featching the URL...")
      
    }));
  }

    //featching the product API..
  // Fetching unique ID for Product
  readOne(id:number):Observable<Product>{
    return this.http.get<Product>(`${environment.apiUrl}/product/${id}`)}

    httpOption={
      headers:new HttpHeaders({
        'content-Types':"application/json"
      })
    }

insert(product:Product):Observable<Product>
  {
    return this.http.post<Product>(`${environment.apiUrl}/product`,
                                        JSON.stringify(product),
                                        this.httpOption)
  }

delete(id:number):Observable<Product>
  {
    return this.http.delete<Product>(`${environment.apiUrl}/product/${id}`)
  } 

update(id:number,product:Product):Observable<Product>
{
   return this.http.put<Product>(`${environment.apiUrl}/product/${id}`,
   JSON.stringify(product),
   this.httpOption)
}  
}

