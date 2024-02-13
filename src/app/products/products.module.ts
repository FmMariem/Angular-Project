import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { CreateartcileComponent } from './createartcile/createartcile.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { HttpClient } from '@angular/common/http';
import { ListarticletableComponent } from './listarticletable/listarticletable.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ArticlecartComponent } from './articlecart/articlecart.component';


@NgModule({
  declarations: [
    ListarticlesComponent,
    CreateartcileComponent,
    EditarticleComponent,
    ListarticletableComponent,
    ProductsComponent,
    ArticlecartComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DataTablesModule,
    FormsModule
    
  ]
})
export class ProductsModule { }
