import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClientService } from '../services/client.service';
import { Contractor } from '../types/types';

@Component({
  selector: 'ont-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  /**
   * Represents the logged user.
   */
  user$ = this.service.getLoggedClient();

  /**
   * The options in the table.
   */
  results: Contractor[] = [
    { profilePic: this.service.getProfilePic(), name: 'Darlene Robertson', contractType: 'Traditional', startDate: 'Mar 4, 2021', amount: 200, status: 'active' },
    { profilePic: this.service.getProfilePic(), name: 'John Doe', contractType: 'Traditional', startDate: 'Mar 4, 2021', amount: 200, status: 'active' },
    { profilePic: this.service.getProfilePic(), name: 'Mary Robertson', contractType: 'Traditional', startDate: 'Mar 4, 2021', amount: 200, status: 'pending' },
  ];

  /**
   * The filtered results.
   */
  filteredResults$ = new BehaviorSubject<Contractor[]>([]);

  constructor(private service: ClientService) { }

  ngOnInit(): void {
  }

  /**
   * Will be triggered once the search with the search.
   * @param event 
   */
  onSearch(event: string): void {
    if (event.trim().length) {
      this.filteredResults$.next(
        this.results.filter(contractor => contractor.name.toLowerCase().indexOf(event.toLowerCase()) > -1)
      );
    } else {
      this.filteredResults$.next(this.results);
    }
  }

}
