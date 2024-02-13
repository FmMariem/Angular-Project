import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produit} from './produit';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiURL="http://localhost:3001/api/articles";
 
constructor(private http:HttpClient) { }

  getAllproduits():Observable<any>{
    return this.http.get(this.apiURL);
  }

  addproduit(art:Produit){
  return this.http.post(this.apiURL,art)
  }

  updateproduit(id:any,art:Produit){
    return this.http.put(this.apiURL+"/"+id,art)
  }
   deleteproduit(id:any){
    return this.http.delete(this.apiURL+"/"+id)
   }
   getprodbyid(id:any):Observable<any>{
    return this.http.get(this.apiURL+"/"+id)
   }
}
