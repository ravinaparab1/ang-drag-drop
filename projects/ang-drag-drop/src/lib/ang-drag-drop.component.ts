import { Component, ViewChild, ElementRef } from '@angular/core';
import { AngDragDropDirective } from './ang-drag-drop.directive';

@Component({
  selector: 'ang-drag-drop',
  templateUrl: './ang-drag-drop.component.html',
  styleUrls: ['./ang-drag-drop.component.css']
})
export class AngDragDropComponent {

  public file: any;
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild(AngDragDropDirective) dnd: any;
  public inProgress = false;
  public clearT: any;
  public name = '';

  browse() {
    const el: HTMLElement = this.fileInput.nativeElement;
    this.fileInput.nativeElement.value = null;
    el.click();
  }

  fileSelected(evt: any) {
    this.dnd.drop(evt);
  }

  fileDropped(file: any) {
    this.file = file[0];
    this.name = file[0].name || file[0].file.name;
    this.inProgress = true;
    setTimeout(() => {
      this.inProgress = false;
    }, 3000);
  }

  remove(evt: any) {
    evt.stopPropagation();
    this.file = null;
    this.inProgress = false;
  }

  isVisible(isImageFLag: number) {
    let regex = /image/i;
    const fileType = this.file.file.type;
    if (isImageFLag === 0) {
      regex = /application/i;
    }
    return regex.test(fileType);
  }
}
