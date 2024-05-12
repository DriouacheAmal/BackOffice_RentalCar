import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

//import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
   // { path: '**', redirectTo: '/login' },
    {path:'login', component:LoginComponent},
    {path:'', component:LayoutComponent, children:[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'subcategories', component: SubcategoriesComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'orders', component: OrdersComponent }
]},
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

