import { Component } from '@angular/core';
import { HighlightsBannerComponent } from './Components/highlights-banner/highlights-banner.component';
import { ThingsWeDoComponent } from './Components/things-we-do/things-we-do.component';
import { LatestNewsComponent } from './Components/latest-news/latest-news.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-home',
  imports: [
    HighlightsBannerComponent,
    ThingsWeDoComponent,
    LatestNewsComponent,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
