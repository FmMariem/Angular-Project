import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Scategorie} from './scategorie';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
  private apiURL="http://localhost:3001/api/scategories";
  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.apiURL);
  }

  addscategorie(scat:Scategorie){
    return this.http.post(this.apiURL,scat)
    }
  
    updatescategorie(id:any,scat:Scategorie){
      return this.http.put(this.apiURL+"/"+id,scat)
    }
     deletescategorie(id:any){
      return this.http.delete(this.apiURL+"/"+id)
     }
     getscatbyid(id:any){
      return this.http.get(this.apiURL+"/"+id)
     }
}
