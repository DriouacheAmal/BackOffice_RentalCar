import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/users-service.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ChartComponent } from './chart/chart.component';
import { DataService } from './data.service';


@NgModule({

  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    CategoriesComponent,
    SubcategoriesComponent,
    ProductsComponent,
    OrdersComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    LayoutComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService , DataService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
