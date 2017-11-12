import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {AppComponent} from './app.component';
import {ProductService} from './service/product.service';
import {By} from "@angular/platform-browser";
import {AgmCoreModule, AgmMap} from "@agm/core";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>,
    component: AppComponent,
    element: HTMLElement,
    debugEl: DebugElement;

  beforeEach(async(() => {
    let mockProductService = {};

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: ProductService, useValue: mockProductService}
      ],
      schemas: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have the correct product name', () => {
    })
  })
})
