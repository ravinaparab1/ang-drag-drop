import { NgModule } from '@angular/core';
import { AngDragDropComponent } from './ang-drag-drop.component';
import { AngDragDropDirective } from './ang-drag-drop.directive';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AngDragDropComponent, AngDragDropDirective],
  imports: [BrowserModule],
  exports: [AngDragDropComponent]
})
export class AngDragDropModule { }
