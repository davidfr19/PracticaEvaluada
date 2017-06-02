import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { NewDishFormComponent } from './components//new-dish-form/new-dish-form.component';
import { CategoriesComponent } from './components//categories/categories.component';
import { CategoryComponent } from './components//category/category.component';
import { DishComponent } from './components//dish/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewDishFormComponent,
    CategoriesComponent,
    CategoryComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
