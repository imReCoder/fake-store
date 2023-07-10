import { Component } from '@angular/core';
import { SharedService } from 'src/shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-ecommerce';


  constructor(public shared: SharedService){}
}
