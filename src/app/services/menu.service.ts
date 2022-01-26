import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { Menu } from '../types/types';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private clientService: ClientService) { }

  /**
   * Will mock an api call to get the available menus for logged user.
   */
  getAvailableMenus(): Observable<Menu[]> {
    const client$ = this.clientService.getLoggedClient();
    const menus$ = of([
        { title: 'Contracts', path: '', icon: 'user' },
        { title: 'Documents', path: 'documents', icon: 'documents' },
        { title: 'Payout', path: 'payout', icon: 'payout' },
        { title: 'Time', path: 'time', icon: 'time' },
      ]).pipe(
        delay(50)
      );

    return client$
            .pipe(
              switchMap(client => {
                //TODO: Do something with the client id to get the menus.
                return menus$
              })
            );
  }
}
