import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopMenuComponent} from './top-menu/top-menu.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import {GraphqlPageComponent} from './graphql-page/graphql-page.component';
import {RestPageComponent} from './rest-page/rest-page.component';
import {HttpClientModule} from '@angular/common/http';
import {GraphQLModule} from './graphql.module';

@NgModule({
  declarations: [
      AppComponent,
      TopMenuComponent,
      GraphqlPageComponent,
      RestPageComponent
  ],
  imports: [
    BrowserModule,
      MaterialModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AppRoutingModule,
      GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
