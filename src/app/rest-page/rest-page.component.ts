import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest.service';

@Component({
    selector: 'app-rest-page',
    templateUrl: './rest-page.component.html',
    styleUrls: ['./rest-page.component.css']
})
export class RestPageComponent implements OnInit {

    teams = {};

    constructor(private restService: RestService) {
    }

    ngOnInit() {
        this.restService.getTeams()
            .subscribe(data => this.teams = data);
    }

}
