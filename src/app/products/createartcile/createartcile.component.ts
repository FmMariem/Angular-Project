import { Component } from '@angular/core';
import { Produit } from '../produit';
import { ArticlesService } from '../articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createartcile',
  templateUrl: './createartcile.component.html',
  styleUrls: ['./createartcile.component.css']
})
export class CreateartcileComponent {
produit:Produit=new Produit()
constructor(private prodserv:ArticlesService,private router:Router)
{}
sauvegarder(){
  this.prodserv.addproduit(this.produit).subscribe(data=>this.router.navigate
    (['articles/listarttable']));

}
}
