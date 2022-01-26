import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClientService } from '../services/client.service';
import { Contractor } from '../types/types';
import gsap from 'gsap';
import { Power3 } from 'gsap/all';

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

  @ViewChild('filters', { static: true })
  filters!: ElementRef<HTMLDivElement>

  @ViewChild('results', { static: true })
  resultsEl!: ElementRef<HTMLDivElement>

  constructor(private service: ClientService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    const tl = gsap.timeline();
    tl.from(this.filters.nativeElement.children, {
      opacity: 0,
      y: 20,
      stagger: .3,
      ease: Power3.easeOut,
      duration: 1.5
    });

    gsap.from(this.resultsEl.nativeElement, {
      delay: .5,
      duration: 1.5,
      ease: Power3.easeOut,
      y: 20,
      opacity: 0
    });
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

  @HostListener('window:resize')
  onResize(): void {
    this.cdr.detectChanges();
  }

  get isMobile(): boolean {
    return document.body.clientWidth < 767;
  }

}
