import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiBoxComponent } from './wiki-box.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WikiService, WikiResponse } from '../services/wiki.service';
import { MatTabsModule } from '@angular/material';
import { EventEmitter } from '@angular/core';

describe('WikiBoxComponent', () => {
  let component: WikiBoxComponent;
  let fixture: ComponentFixture<WikiBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiBoxComponent ],
      imports: [HttpClientTestingModule, MatTabsModule],
      providers: [{ provide: WikiService, useClass: MockWikiService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockWikiService {
  WikiEmitter: EventEmitter<WikiResponse[]> = new EventEmitter();
}
