import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GraphqlPageComponent} from './graphql-page/graphql-page.component';
import {RestPageComponent} from './rest-page/rest-page.component';

const routes: Routes = [
    {path: 'graphql', component: GraphqlPageComponent},
    {path: 'rest', component: RestPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
