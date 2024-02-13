import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ScategoriesComponent } from './scategories/scategories.component';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { EditcategorieComponent } from './editcategorie/editcategorie.component';
import { CreatecategorieComponent } from './createcategorie/createcategorie.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ScategoriesComponent,
    ListcategoriesComponent,
    EditcategorieComponent,
    CreatecategorieComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class CategoriesModule { }
