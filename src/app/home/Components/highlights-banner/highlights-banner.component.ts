import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-highlights-banner',
  imports: [CommonModule],
  providers: [],
  templateUrl: './highlights-banner.component.html',
  styleUrl: './highlights-banner.component.scss',
})
export class HighlightsBannerComponent {
  // private http = inject(HttpClient);
  // ngOnInit(): void {
  //   this.fetchHighlights();
  // }
  // fetchHighlights(): void {
  //   this.http
  //     .get(' https://api.npoint.io/fee177346e7875554413 ')
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }
}
