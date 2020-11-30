import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../../interfaces/responses/PortalSync';
import { StaticData } from '../../interfaces/responses/StaticData';
import { Car } from '../../interfaces/models/Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  public staticData: StaticData;
  public portalSync: PortalSync;
  public carData:any;
  public userCars: any;
  public carsMap: Map<string, Car> = new Map<string, Car>();

  constructor() { }

  ngOnInit(): void {

    this.staticData = JSON.parse(localStorage.getItem('userData'))
    this.portalSync = JSON.parse(localStorage.getItem('portalSync'))

    this.carData = this.staticData.cars;
    this.userCars = this.portalSync.userCars;
    
    for (let i = 0; i < this.carData.length; i++) {
      this.carsMap.set(this.carData[i].carId, this.carData[i]);
    }
  }

}


