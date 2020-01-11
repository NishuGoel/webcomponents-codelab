import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsetupComponent } from './getsetup.component';

describe('GetsetupComponent', () => {
  let component: GetsetupComponent;
  let fixture: ComponentFixture<GetsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
