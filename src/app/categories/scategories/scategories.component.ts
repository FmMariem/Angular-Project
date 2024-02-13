import { Component } from '@angular/core';
import {ScategoriesService} from "../scategories.service";
import {Scategorie} from "../scategorie";
@Component({
  selector: 'app-scategories',
  templateUrl: './scategories.component.html',
  styleUrls: ['./scategories.component.css']
})
export class ScategoriesComponent {
  tabscat: Scategorie[]=[];

  constructor (private artserv:ScategoriesService)
  {}
  
  ngOnInit(){
    this.artserv.getAll().subscribe((data:Scategorie[])=>{this.tabscat=data});
  }

  deletesCategorie(_id:object){
    this.artserv.deletescategorie(_id).subscribe(res => {
    this.tabscat = this.tabscat.filter(item => item._id !== _id);
    console.log('Post deleted successfully!');
    })
    }
}
