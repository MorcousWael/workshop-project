import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Iabout {
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
export class BannerServiceService {
  private apiUrl: string = 'https://api.npoint.io/fee177346e7875554413';

  constructor(private http: HttpClient) {}

  getInfo(): Observable<Iabout> {
    console.log(this.http.get<Iabout>(this.apiUrl));
    return this.http.get<Iabout>(this.apiUrl);
  }
}
