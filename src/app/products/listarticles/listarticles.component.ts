import { Component } from '@angular/core';
import {ArticlesService} from "../articles.service";
import {Produit} from "../produit";

@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent {
      tabproduit: Produit[]=[];

      constructor (private artserv:ArticlesService)
      {}
      
      ngOnInit(){
        this.artserv.getAllproduits().subscribe((data:Produit[])=>{this.tabproduit=data});
      }
}
