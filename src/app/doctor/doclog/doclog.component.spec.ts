import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoclogComponent } from './doclog.component';

describe('DoclogComponent', () => {
  let component: DoclogComponent;
  let fixture: ComponentFixture<DoclogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoclogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoclogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
