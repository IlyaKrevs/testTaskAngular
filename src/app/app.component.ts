import { Component } from '@angular/core';
import { myCoords } from 'src/coordInterface';

import { MYBASICCOORDS } from 'src/myBasicCoords';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userChoose?: myCoords;

  myBasicCoords = MYBASICCOORDS;


  checkPls() {
    console.log(this.userChoose)
  }


  showMePLs(item: any) {
    this.userChoose = item;

  }

}
