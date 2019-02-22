import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GraphqlPageComponent} from './graphql-page.component';

describe('GraphqlPageComponent', () => {
    let component: GraphqlPageComponent;
    let fixture: ComponentFixture<GraphqlPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GraphqlPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GraphqlPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
