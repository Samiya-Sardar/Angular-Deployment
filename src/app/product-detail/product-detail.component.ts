import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  productId:any;
  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit()
  {
    this.activatedRoute.params.subscribe({
      next:(value)=>this.productId=value['productId']
    })
  }

}
