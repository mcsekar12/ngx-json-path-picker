import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JsonPathPickerModule } from 'projects/ngx-json-path-picker/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, JsonPathPickerModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
