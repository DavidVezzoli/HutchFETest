import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../../interfaces/responses/PortalSync';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {
  
  public portalSync:PortalSync;

  constructor() { }

  ngOnInit(): void {
    this.portalSync = JSON.parse(localStorage.getItem('portalSync'))
  }

}
