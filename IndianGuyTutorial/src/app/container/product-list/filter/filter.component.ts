import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number = 0

  @Input()
  inStock : number = 0

  @Input()
  outOfStock: number = 0

  @Output()
  selectedFilterRadioBtnChange: EventEmitter<string> = new EventEmitter<string>();

  // child component of product list
  selectedFilterRadioBtn: string = 'all';

  onSelectedChange() {
    // console.log(this.selectedFilterRadioBtn);
    // console.log("selectedFilterRadioBtnChange event raised");
    this.selectedFilterRadioBtnChange.emit(this.selectedFilterRadioBtn);
  }
}
