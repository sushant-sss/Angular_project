import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
count=0;

constructor(private ps:ProductserviceService){}  
 showcount()
{
  
}

//ngOnInit():void
ngOnInit(): void 
{
  this.ps.countsubject$.subscribe(val=>this.count=val);  
}

}
