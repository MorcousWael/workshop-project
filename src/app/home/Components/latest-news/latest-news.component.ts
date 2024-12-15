import { Component, OnInit } from '@angular/core';
import {
  NewsServiceService,
  NewsItem,
} from '../../../core/Services/news-service/news-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latest-news',
  imports: [CommonModule],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
  standalone: true,
})
export class LatestNewsComponent implements OnInit {
  newsList: NewsItem[] = [];
  filteredNewsList: NewsItem[] = [];
  isPopupVisible = false;
  isLoved = false;
  showPopup: boolean = false; // Popup state
  showAllNews: boolean = false; // Flag to toggle between filtered and all news

  constructor(private newsService: NewsServiceService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.newsList = response.News.map((news) => ({
          ...news,
          image: news.urlToImage,
          category: this.getCategory(news.categoryID),
        }));
        this.filteredNewsList = this.newsList.filter(
          (news) => news.showOnHomepage === 'yes'
        );
      },
      error: (err) => console.error('Error fetching news:', err),
    });
  }

  toggleViewAll() {
    this.showAllNews = !this.showAllNews;
  }

  toggleLove(news: NewsItem) {
    news.isLoved = !news.isLoved;
  }

  togglePopup() {
    this.showPopup = !this.showPopup; // Toggle popup visibility
  }

  share(platform: string) {
    console.log(`Sharing via ${platform}`);
    this.togglePopup(); // Close popup after sharing
  }

  getCategory(categoryID: string): string {
    const categories: { [key: string]: string } = {
      '1': 'Technology',
      '2': 'Sport',
      '3': 'Health',
      '4': 'Economics',
    };
    return categories[categoryID] || 'General';
  }
}
