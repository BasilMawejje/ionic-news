import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  currentArticle : any;
  constructor(private http: HttpClient) { }

  getData(url){
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
    //return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from=2018-12-06&sortBy=publishedAt&apiKey=fac26990e8a943b8b37f3372e623188d');
  }

}
