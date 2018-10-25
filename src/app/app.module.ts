import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JsonPathPickerModule } from 'json-path-picker';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, JsonPathPickerModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
