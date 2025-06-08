import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    category:any;
    constructor(private activateroute:ActivatedRoute){}

    ngOnInit(){
      this.activateroute.queryParams.subscribe({
        next:(value)=>{console.log(value);
          this.category=value['category']
        }
      })
    }
}
