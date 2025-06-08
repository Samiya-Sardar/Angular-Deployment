import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'',component:HomeComponent ,title:"Home"},
    {path:'products',component:ProductComponent,title:"Products",children:[
        {path:"details/:productId",component:ProductDetailComponent},
        {path:"addproduct",component:AddProductsComponent}
    ]},
    {path:'profile',component:ProfileComponent,title:"Profile"},
    {path:'dashboard',component:DashboardComponent,title:"Dashboard"},
    {path:'**',component:NotFoundComponent,title:"ERORR"}
];
