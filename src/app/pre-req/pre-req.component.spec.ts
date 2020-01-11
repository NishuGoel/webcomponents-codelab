import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreReqComponent } from './pre-req.component';

describe('PreReqComponent', () => {
  let component: PreReqComponent;
  let fixture: ComponentFixture<PreReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
