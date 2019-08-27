import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
    selector: '[dragDrop]'
})
export class AngDragDropDirective {
    @Output() files: EventEmitter<any[]> = new EventEmitter();

    constructor(
        private sanitizer: DomSanitizer
    ) { }

    @HostListener('dragover', ['$event']) public dragOver(evt: DragEvent) {
        evt.preventDefault();
        evt.stopPropagation();
    }

    @HostListener('dragleave', ['$event']) public dragLeave(evt: DragEvent) {
        evt.preventDefault();
        evt.stopPropagation();
    }

    @HostListener('drop', ['$event']) public drop(evt: any) {
        if (evt.preventDefault) {
            evt.preventDefault();
            evt.stopPropagation();
        }
        const files: Array<any> = [];
        const dataTransfer = evt.dataTransfer || evt.target;
        const array: Array<any> = dataTransfer.files;
        for (const file of array) {
            const url = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(file));
            files.push({ file, url });
        }
        if (files.length > 0) {
            this.files.emit(files);
        }
    }

}
