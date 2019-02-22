import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

    title = 'My App';

    constructor() {
    }

    // Shared Title Field from AppComponent;
    // @Input() titleState: string;

    ngOnInit(): void {
    }

}
