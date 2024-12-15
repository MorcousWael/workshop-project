import { Component } from '@angular/core';
import { HighlightsBannerComponent } from './Components/highlights-banner/highlights-banner.component';
import { ThingsWeDoComponent } from './Components/things-we-do/things-we-do.component';
import { LatestNewsComponent } from './Components/latest-news/latest-news.component';

@Component({
  selector: 'app-home',
  imports: [
    HighlightsBannerComponent,
    ThingsWeDoComponent,
    LatestNewsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {}
