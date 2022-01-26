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

  /**
   * Controls the popover.
   */
  selectedIndex = -1;

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

  /**
   * When the user hits the action button, it will display the popover.
   * @param index the index of the item.
   * @returns 
   */
  onActionClick(index: number): void {
    if (index === this.selectedIndex) {
      this.selectedIndex = -1;
      return;
    }
    this.selectedIndex = index;
  }

  /**
   * Tells whether the device is mobile or not.
   */
  get isMobile(): boolean {
    return document.body.clientWidth < 767;
  }

}
