import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../../interfaces/responses/PortalSync';
import { StaticData } from '../../interfaces/responses/StaticData';
import { Augment } from '../../interfaces/models/Augment';

@Component({
  selector: 'app-augments',
  templateUrl: './augments.component.html',
  styleUrls: ['./augments.component.css']
})

export class AugmentsComponent implements OnInit {
  public staticData: StaticData;
  public portalSync: PortalSync;
  public augmentsData:any;
  public userAugments:any;
  public augmentMap: Map<string, Augment> = new Map<string, Augment>();

  constructor() { }

  ngOnInit(): void {

    this.staticData = JSON.parse(localStorage.getItem('userData'))
    this.portalSync = JSON.parse(localStorage.getItem('portalSync'))

    this.augmentsData = this.staticData.augments;
    this.userAugments = this.portalSync.userAugments;
    
    for (let i = 0; i < this.augmentsData.length; i++) {
      this.augmentMap.set(this.augmentsData[i].augmentId, this.augmentsData[i]);
    }
  }

}



