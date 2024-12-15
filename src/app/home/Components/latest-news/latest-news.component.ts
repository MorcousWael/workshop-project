import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-latest-news',
  imports: [CommonModule],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent {
  newsList = [
    {
      image: 'assets/news1.jpg',
      title:
        'Let us commit to do our part and advance the promise of equality, justice...',
      date: 'Wed 12 Aug 2022',
      category: 'Economics',
      icon: 'calendar_today',
    },
    {
      image: 'assets/news2.jpg',
      title:
        'In interactive live seminar, top lectures of the IHF present current topics...',
      date: 'Wed 12 Aug 2022',
      category: 'Sport',
      icon: 'calendar_today',
    },
    {
      image: 'assets/news3.jpg',
      title: 'Libya to construct solar plant with Total Energies',
      date: 'Wed 12 Aug 2022',
      category: 'Technology',
      icon: 'calendar_today',
    },
    {
      image: 'assets/news4.jpg',
      title: 'The 2nd IHF Wheelchair Handball Seminar begins this Saturday.',
      date: 'Wed 12 Aug 2022',
      category: 'Sport',
      icon: 'calendar_today',
    },
    {
      image: 'assets/news5.jpg',
      title: 'President El Sisi Unveils “Egypt Vision 2030” Sustainable...',
      date: 'Wed 12 Aug 2022',
      category: 'Economics',
      icon: 'calendar_today',
    },
    {
      image: 'assets/news6.jpg',
      title: 'COVID-19: get the latest updates, The MoF is leading work...',
      date: 'Wed 12 Aug 2022',
      category: 'Health',
      icon: 'calendar_today',
    },
  ];
}
