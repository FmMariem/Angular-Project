import { Component } from '@angular/core';
import {CategoriesService} from "../categories.service";
import {Categorie} from "../categorie";
@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {
  tab: Categorie[]=[];

  constructor (private artserv:CategoriesService)
  {}
  
  ngOnInit(){
    this.artserv.getAll().subscribe((data:Categorie[])=>{this.tab=data});
  }


  deleteCategorie(_id:object){
    this.artserv.deletecategorie(_id).subscribe(res => {
    this.tab = this.tab.filter(item => item._id !== _id);
    console.log('Post deleted successfully!');
    })
    }
}
