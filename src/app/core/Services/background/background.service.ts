import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private backgroundColorSource = new Subject<string>();
  backgroundColor$ = this.backgroundColorSource.asObservable();

  changeBackgroundColor(color: string): void {
    this.backgroundColorSource.next(color);
  }
}
