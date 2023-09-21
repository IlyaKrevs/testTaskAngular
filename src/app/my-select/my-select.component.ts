import { Component, Input, Output, EventEmitter } from '@angular/core';
import { myCoords } from 'src/coordInterface';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.css']
})
export class MySelectComponent {
  @Input() myOptions!: myCoords[];
  @Input() userChoose?: myCoords;
  @Output() choose = new EventEmitter();

  makeChoose(value?: myCoords) {
    this.choose.emit(value)
    console.log(value)
  }
}
