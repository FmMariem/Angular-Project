import { Component } from '@angular/core';
import {ArticlesService} from "../articles.service";
import {Produit} from "../produit";
@Component({
  selector: 'app-articlecart',
  templateUrl: './articlecart.component.html',
  styleUrls: ['./articlecart.component.css']
})
export class ArticlecartComponent {
  tabproduit: Produit[]=[];

  constructor (private artserv:ArticlesService)
  {}
  
  ngOnInit(){
    this.artserv.getAllproduits().subscribe((data:Produit[])=>{this.tabproduit=data});
  }
}
