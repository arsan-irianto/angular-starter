import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'app-graphql-page',
    templateUrl: './graphql-page.component.html',
    styleUrls: ['./graphql-page.component.css']
})
export class GraphqlPageComponent implements OnInit {

    rates = {};
    countries = {};

    constructor(private apolloClient: Apollo) {
    }

    ngOnInit() {
        // this.getCurrenciesRate();
        this.getCountries();
    }

    getCountries() {
        return this.apolloClient.watchQuery({
            query: gql`
      {
        continent(code: "AS") {
          countries {
            code
            name
            phone
            currency
          }
        }
      }
      `
        }).valueChanges.subscribe(results => {
            this.countries = results.data;
            console.log((this.countries));
        });
    }

    getCurrenciesRate() {
        return this.apolloClient
            .watchQuery({
                query: gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `,
            })
            .valueChanges.subscribe(result => {
                this.rates = result.data;
            });
    }

}
