import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { Properties } from 'src/app/models/shared';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
