import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Teams} from './rest-page/teams';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    private realUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328';
    private mockUrl = '/assets/mock_teams.json';

    constructor(private httpClient: HttpClient) {
    }

    // with observable
    getTeamsObservable(): Observable<Teams[]> {
        return this.httpClient.get<Teams[]>(this.realUrl);
    }

    // without observable
    getTeams() {
        return this.httpClient.get(this.realUrl);
    }
}
