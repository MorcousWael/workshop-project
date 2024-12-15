import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  categoryID: string;
  urlToImage: string;
  description: string;
  publishedDate: string;
  showOnHomepage: string;
  isLoved: Boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NewsServiceService {
  private apiUrl = 'https://api.npoint.io/d275425a434e02acf2f7'; // Your API URL

  constructor(private http: HttpClient) {}

  // Method to fetch news
  getNews(): Observable<{ News: NewsItem[] }> {
    return this.http.get<{ News: NewsItem[] }>(this.apiUrl);
  }
}
