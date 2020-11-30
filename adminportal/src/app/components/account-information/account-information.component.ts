import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../../interfaces/responses/PortalSync';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css']
})
export class AccountInformationComponent implements OnInit {

  public portalSync: PortalSync;

  constructor() { }

  ngOnInit(): void {
    this.portalSync = JSON.parse(localStorage.getItem('portalSync'))
  }

}



