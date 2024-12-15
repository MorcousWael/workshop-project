import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Thing {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThingsWeDoService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users'; // placeholder till we get real api

  constructor(private http: HttpClient) {}

  getThings(): Observable<Thing[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((data) =>
        data.map((item: any) => ({
          id: item.id,
          title: item.title,

          imgTitle: item.imgTitle,

          description: item.brief,
          imageUrl: item.imgUrl,
        }))
      )
    );
  }
}
