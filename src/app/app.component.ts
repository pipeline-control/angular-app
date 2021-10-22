import { Component } from '@angular/core';
import{ApiService} from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  title = 'angularapp';
  constructor(private apiData:ApiService){}
  ngOnInit(){
   this.apiData.getApi().subscribe((result)=>{
     console.log("result", result)
     this.data = result;
   })
  }
}
