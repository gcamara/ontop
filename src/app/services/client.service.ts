import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import { OtpClient } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  /**
   * This will emulate an http call.
   */
  getLoggedClient(): Observable<OtpClient> {
    return of({
      id: '00001',
      name: 'John Doe',
      companyName: 'XPTO Corp.',
      profilePic: this.getProfilePic()
    }).pipe(
      take(1),
      delay(50)
    );
  }

  /**
   * Represents the only profile picture throughout the application.
   * @returns the same image for profile pics.
   */
  getProfilePic(): string {
    return `data:image/jpeg;base64,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`;
  }
}
