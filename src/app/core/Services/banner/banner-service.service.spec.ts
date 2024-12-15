import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { BannerService } from './banner-service.service';
import { IAbout, Slide } from './banner-service.service'; // Import interfaces if needed

describe('BannerService', () => {
  let service: BannerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [], // Add HttpClientTestingModule
      providers: [BannerService], // Ensure the BannerService is provided
    });
    service = TestBed.inject(BannerService);
    httpMock = TestBed.inject(HttpTestingController); // Inject HttpTestingController
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch slides data', () => {
    const mockSlides: Slide[] = [
      {
        id: 0,
        brief: 'Test brief',
        order: 1,
        title: 'Test Title 1',
        imgUrl: '',
        itemUrl: '',
        category: 'Test Category',
        videoUrl: '',
        colorCode: 'FF7C16',
      },
      {
        id: 1,
        brief: 'Test brief 2',
        order: 2,
        title: 'Test Title 2',
        imgUrl: '',
        itemUrl: '',
        category: 'Test Category 2',
        videoUrl: '',
        colorCode: 'F215B6',
      },
    ];

    // Call the method to fetch slides
    service.getSlides().subscribe((slides) => {
      expect(slides.length).toBe(2);
      expect(slides).toEqual(mockSlides); // Validate that the result matches the mock data
    });

    // Mock the HTTP request
    const req = httpMock.expectOne(
      'https://api.npoint.io/fee177346e7875554413'
    );
    expect(req.request.method).toBe('GET'); // Ensure it's a GET request
    req.flush({ slides: mockSlides }); // Return mock data for the HTTP request

    httpMock.verify(); // Ensure there are no outstanding requests
  });
});
