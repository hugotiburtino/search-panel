import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckduckgoBoxComponent } from './duckduckgo-box.component';

describe('DuckduckgoBoxComponent', () => {
  let component: DuckduckgoBoxComponent;
  let fixture: ComponentFixture<DuckduckgoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckduckgoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckduckgoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
