import { Component } from '@angular/core';
import { Categorie } from '../categorie';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcategorie',
  templateUrl: './createcategorie.component.html',
  styleUrls: ['./createcategorie.component.css']
})
export class CreatecategorieComponent {
  categorie:Categorie=new Categorie()
  constructor(private catServ:CategoriesService,private router:Router)
  {}
  sauvegarder(){
    this.catServ.addcategorie(this.categorie).subscribe(data=>this.router.navigate
      (['categories/listcat']));
  
  }
}
