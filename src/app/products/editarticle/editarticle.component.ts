import { Component } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../produit';
@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})
export class EditarticleComponent {
  _id: object;
  produit: Produit = new Produit();
  constructor(private artserv: ArticlesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this._id = this.route.snapshot.params['id'];
    this.artserv.getprodbyid(this._id).subscribe(data => this.produit=data);
  }

  sauvegarder(){
    this.artserv.updateproduit(this._id,this.produit).subscribe(data=>this.router.navigate
      (['articles/listarttable']));
  
  }
  }
