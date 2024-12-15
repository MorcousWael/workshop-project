import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import map operator

export interface IAbout {
  slides: Slide[];
}

export interface Slide {
  id: number;
  brief: string;
  order: number;
  title: string;
  imgUrl: string;
  itemUrl: string;
  category: string;
  videoUrl: string;
  colorCode: string;
}

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private apiUrl: string = 'https://api.npoint.io/fee177346e7875554413';

  constructor(private http: HttpClient) {}

  // Get the slides information from the API
  getSlides(): Observable<Slide[]> {
    return this.http.get<IAbout>(this.apiUrl).pipe(
      map((data) => data.slides) // Extract the slides array directly
    );
  }
}
