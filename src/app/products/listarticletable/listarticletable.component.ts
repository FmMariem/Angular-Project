import { Component } from '@angular/core';
import {ArticlesService} from "../articles.service";
import {Produit} from "../produit";

@Component({
  selector: 'app-listarticletable',
  templateUrl: './listarticletable.component.html',
  styleUrls: ['./listarticletable.component.css']
})
export class ListarticletableComponent {
  tabproduit: Produit[]=[];

  constructor (private artserv:ArticlesService)
  {
    
  }
  
  ngOnInit(){
    this.artserv.getAllproduits().subscribe((data:Produit[])=>{this.tabproduit=data});
  }


  deleteProduct(_id:object){
    this.artserv.deleteproduit(_id).subscribe(res => {
    this.tabproduit = this.tabproduit.filter(item => item._id !== _id);
    console.log('Post deleted successfully!');
    })
    }
}
