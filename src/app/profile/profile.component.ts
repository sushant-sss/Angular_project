import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  age=0;
  name="no name"

  // Subscription$ !:Subscription
  //http://localhost:51452/profile?name="sbsjs"&age="23"
  constructor(private route:ActivatedRoute){}
  myobservable$ !:Observable<any>

  ngOnInit(): void {
    this.myobservable$=this.route.queryParams;
  // this.route.queryParams.subscribe(params=>
  // {
  //   this.age=params['age']
  //   this.name=params['name']
  // }
      
  }

  ngOnDestory(): void{
    // this.Subscription$.unsubscribe()
  }
}
