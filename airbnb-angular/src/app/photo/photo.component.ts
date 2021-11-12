import { Component, Input } from "@angular/core";

@Component({
    selector: 'db-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {

    @Input() url = ''
    @Input() description = ''
}