import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RestPageComponent} from './rest-page.component';

describe('RestPageComponent', () => {
    let component: RestPageComponent;
    let fixture: ComponentFixture<RestPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RestPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RestPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
