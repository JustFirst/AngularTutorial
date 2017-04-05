import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegFormComponent } from './registration-form.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule,
  FormsModule ],
  declarations: [ RegFormComponent],
  bootstrap:    [ RegFormComponent ]
})
export class AppModule { }
