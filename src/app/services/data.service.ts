import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) {
    console.log("service started");
  }
  
  getNews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=61a7ab24b4594684a1e38aaf92199386").map(res => res.json());
  }

}
