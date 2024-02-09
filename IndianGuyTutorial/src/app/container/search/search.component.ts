import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText : string = ''

//1.create an event
@Output()
searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText)
  }

  onInputChange(event: any) {
    // console.log(event.target.value)
    this.searchText = event.target.value;
  }
}
