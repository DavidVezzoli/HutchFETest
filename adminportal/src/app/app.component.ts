
import { Component, OnInit } from '@angular/core';
import { Manufacturer } from './enums/Manufacturer';
import { PortalSync } from './interfaces/responses/PortalSync';
import { StaticData } from './interfaces/responses/StaticData';
import { PortalSyncService } from './services/portal-sync.service';
import { StaticDataService } from './services/static-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hutch Admin Portal';
  currentPage = localStorage.getItem('sectionTitle')

  public staticData: StaticData;
  public portalSync: PortalSync;
  public ftueConfig: any = null;
  public orderedFTUEConfig: any = null;
  public carManufacturerEnumMap: any;

  constructor(public portalSyncService: PortalSyncService, public staticDataService: StaticDataService) { }

  ngOnInit(): void {
    this.staticDataService.getStaticData("placeholder", "placeholder", "placeholder").subscribe(staticDataResponse => {
      this.staticData = staticDataResponse;
      
      localStorage.setItem('userData', JSON.stringify(this.staticData));

      this.ftueConfig = this.staticData.ftueConfig;
      this.orderedFTUEConfig = {};
      Object.keys(this.ftueConfig).forEach((ftueVersion) => {
        if (!this.orderedFTUEConfig.hasOwnProperty(ftueVersion)) {
          this.orderedFTUEConfig[ftueVersion] = {};
        }

        Object.keys(this.ftueConfig[ftueVersion]).forEach((ftueStory) => {
          const ftueSteps = Object.keys(this.ftueConfig[ftueVersion][ftueStory]);
          const orderedFTUESteps = [];
          for (let i = 0; i < ftueSteps.length; i++) {
            for (let j = 0; j < ftueSteps.length; j++) {
              if (this.ftueConfig[ftueVersion][ftueStory][ftueSteps[j]] === i) {
                orderedFTUESteps.push(ftueSteps[j]);
                break;
              }
            }
          }

          this.orderedFTUEConfig[ftueVersion][ftueStory] = orderedFTUESteps;
        });
      });

      this.carManufacturerEnumMap = {};
      Object.keys(Manufacturer).forEach((manufacturer) => {
        this.carManufacturerEnumMap[Manufacturer[manufacturer]] = manufacturer;
      });

      this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
        this.portalSync = portalSyncResponse;
        localStorage.setItem('portalSync', JSON.stringify(this.portalSync));
      });
    });
  }

  changePageTitle(newTitle){
    localStorage.setItem('sectionTitle', newTitle);
    this.currentPage = newTitle
  }

}
