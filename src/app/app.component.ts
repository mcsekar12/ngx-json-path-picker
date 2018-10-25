import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-json-path-picker';
  selectedKey;
  currentJson = {
    'simple key': 'simple value',
    numbers: 1234567,
    'simple list': ['value1', 22222, 'value3'],
    owner: null,
    'simple obect': {
      'simple key': 'simple value',
      numbers: 1234567,
      'simple list': ['value1', 22222, 'value3'],
      'simple obect': {
        key1: 'value1',
        key2: 22222,
        key3: 'value3'
      }
    }
  };
  jsonData;

  setCurrentJson() {
    this.currentJson = JSON.parse(this.jsonData);
  }
  selectValue(key) {
    console.log(key);
    this.selectedKey = key;
  }
}
