import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBoxComponent } from './google-box.component';
import { GoogleService } from '../services/google.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('GoogleBoxComponent', () => {
  let component: GoogleBoxComponent;
  let fixture: ComponentFixture<GoogleBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleBoxComponent ],
      imports: [ HttpClientModule ]
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
