import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'ont-user-details',
  templateUrl: './ont-user-details.component.html',
  styleUrls: ['./ont-user-details.component.scss']
})
export class OntUserDetailsComponent implements OnInit {

  /**
   * This represents the logged user.
   */
  user$ = this.service.getLoggedClient();

  constructor(private service: ClientService) { }

  ngOnInit(): void {
  }

}
