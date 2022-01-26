import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ont-search-bar',
  templateUrl: './ont-search-bar.component.html',
  styleUrls: ['./ont-search-bar.component.scss']
})
export class OntSearchBarComponent implements OnInit, OnDestroy {

  /**
   * An event that'll be triggered when the user inputs.
   */
  @Output()
  onSearch = new EventEmitter<string>();

  /**
   * A debounce time to be awaited after user finishes typing.
   */
  @Input()
  debounceTime: number = 500;

  /**
   * An observable that'll handle the text changes with a given debounce time.
   */
  textChanged$ = new BehaviorSubject<string>('');
  
  /**
   * This will handle the unsubscriptions on destroy.
   */
  destroy$ = new Subject<boolean>();

  /**
   * The value informed by the user.
   */
  value = '';

  ngOnInit(): void {
    this.textChanged$
      .pipe(
        debounceTime(this.debounceTime),
        takeUntil(this.destroy$)
      ).subscribe(text => {
        this.onSearch?.emit(text);
      })
  }

  /**
   * When the model changes, triggers an onSearch event.
   * @param value a given text.
   */
  onModelChanged(value: any): void {
    this.textChanged$.next(value);
  }

  ngOnDestroy(): void {
      this.destroy$.next(false);
      this.destroy$.unsubscribe();
  }

}
