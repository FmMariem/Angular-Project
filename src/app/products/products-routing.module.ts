import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarticlesComponent } from './listarticles/listarticles.component';
import { CreateartcileComponent } from './createartcile/createartcile.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { ListarticletableComponent } from './listarticletable/listarticletable.component';
import { ArticlecartComponent } from './articlecart/articlecart.component';

const routes: Routes = [
  {path:"articles/listart",component:ListarticlesComponent},
  {path:"artciles/createart",component:CreateartcileComponent},
  {path:"artciles/editart/:id",component:EditarticleComponent},
  {path:"articles/listarttable",component:ListarticletableComponent},
  {path:"articles/card",component:ArticlecartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
