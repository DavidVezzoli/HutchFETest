import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../../interfaces/responses/PortalSync';
import { StaticData } from '../../interfaces/responses/StaticData';
import { Resource } from '../../interfaces/models/Resource';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  public staticData: StaticData;
  public portalSync: PortalSync;
  public resourceData:any;
  public userResources:any;
  public resourceMap: Map<string, Resource> = new Map<string, Resource>();

  constructor() { }

  ngOnInit(): void {

    this.staticData = JSON.parse(localStorage.getItem('userData'))
    this.portalSync = JSON.parse(localStorage.getItem('portalSync'))

    this.resourceData = this.staticData.resources;
    this.userResources = this.portalSync.userResources;
    
    for (let i = 0; i < this.resourceData.length; i++) {
      this.resourceMap.set(this.resourceData[i].resourceId, this.resourceData[i]);
    }
  }

}
