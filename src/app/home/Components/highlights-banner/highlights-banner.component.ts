import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../../core/Services/banner/banner-service.service'; // Import the service
import { Slide } from '../../../core/Services/banner/banner-service.service'; // Import Slide type for type-checking
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-highlights-banner',
  imports: [CommonModule],
  templateUrl: './highlights-banner.component.html',
  styleUrls: ['./highlights-banner.component.scss'],
})
export class HighlightsBannerComponent implements OnInit {
  slides: Slide[] = [];
  activeSlideIndex: number = 0;
  private slideInterval: any; // To store the interval ID

  // Function to get color based on the slide's order
  getColor(order: number): string {
    switch (order) {
      case 1:
        return '#F215B6'; // Pink
      case 2:
        return '#FF7C16'; // Green
      case 3:
        return '#A6E51C'; // Orange
      default:
        return '#000'; // Default color if not 0, 1, or 2
    }
  }

  setActiveSlide(index: number): void {
    this.activeSlideIndex = index;
  }

  constructor(private bannerService: BannerService) {}

  ngOnInit(): void {
    this.fetchSlides();
    this.startSlideShow(); // Start the automatic slide switching
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval); // Clean up the interval when the component is destroyed
    }
  }

  fetchSlides(): void {
    this.bannerService.getSlides().subscribe({
      next: (data) => {
        this.slides = data;
        console.log(this.slides);
      },
      error: (error) => {
        console.error('Error fetching slides:', error);
      },
    });
  }

  // Function to start the slideshow by changing the active slide every 5 seconds
  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
    }, 3000); // Switch slide every 5 seconds
  }
}
