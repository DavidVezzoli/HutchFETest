

import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../../interfaces/responses/PortalSync';

@Component({
  selector: 'app-player-error-logs',
  templateUrl: './player-error-logs.component.html',
  styleUrls: ['./player-error-logs.component.css']
})
export class PlayerErrorLogsComponent implements OnInit {
  public portalSync: PortalSync;
  public errorLogs:any;

  constructor() { }

  ngOnInit(): void {
    this.portalSync = JSON.parse(localStorage.getItem('portalSync'))
    this.errorLogs = this.portalSync.logEntries
    this.errorLogs = this.errorLogs.sort((a, b) => parseFloat(b.timestamp) - parseFloat(a.timestamp));
  }
}
