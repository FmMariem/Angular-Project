import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { EditcategorieComponent } from './editcategorie/editcategorie.component';
import { CreatecategorieComponent } from './createcategorie/createcategorie.component';
import { ScategoriesComponent } from './scategories/scategories.component';

const routes: Routes = [
  {path:"categories/listcat",component:ListcategoriesComponent},
  {path:"categories/editcat/:id",component:EditcategorieComponent},
  {path:"categories/createcat",component:CreatecategorieComponent},
  {path:"scategories/listscat",component:ScategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
