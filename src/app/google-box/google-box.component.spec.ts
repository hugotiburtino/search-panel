import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBoxComponent } from './google-box.component';

describe('GoogleBoxComponent', () => {
  let component: GoogleBoxComponent;
  let fixture: ComponentFixture<GoogleBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
