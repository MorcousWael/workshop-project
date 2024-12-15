import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  private apiUrl = 'https://api.npoint.io/fee177346e7875554413'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getBannerData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
