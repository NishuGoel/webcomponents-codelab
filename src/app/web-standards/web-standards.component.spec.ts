import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebStandardsComponent } from './web-standards.component';

describe('WebStandardsComponent', () => {
  let component: WebStandardsComponent;
  let fixture: ComponentFixture<WebStandardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebStandardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
