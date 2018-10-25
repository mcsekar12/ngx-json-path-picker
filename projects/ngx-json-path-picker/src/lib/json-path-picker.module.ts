import { NgModule } from '@angular/core';
import { JsonPathPickerComponent } from './json-path-picker.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [JsonPathPickerComponent],
  exports: [JsonPathPickerComponent]
})
export class JsonPathPickerModule {}
