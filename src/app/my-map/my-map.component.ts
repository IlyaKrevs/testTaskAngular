import {
  Component,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  Input
} from '@angular/core';
import * as L from 'leaflet';
import { myCoords } from 'src/coordInterface';

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.css']
})
export class MyMapComponent implements OnChanges, AfterViewInit {
  @Input() userChoose?: any;


  private map: any;

  startCoord: myCoords = {
    center: [0, 0],
    zoom: 3,
  };

  private initMap(): void {

    this.map = L.map('map', (this.userChoose ? this.userChoose : this.startCoord));

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

      maxZoom: 18,

      minZoom: 3,

      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

    });

    tiles.addTo(this.map);

  }

  ngOnChanges(changes: SimpleChanges) {
    this.map.setView(this.userChoose.center, this.userChoose.zoom);

    console.log(this.userChoose.center, this.userChoose.zoom)
    console.log(changes)
  }


  ngAfterViewInit(): void {

    this.initMap();

  }

}

