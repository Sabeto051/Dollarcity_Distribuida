import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VericodeComponent } from './vericode.component';

describe('VericodeComponent', () => {
  let component: VericodeComponent;
  let fixture: ComponentFixture<VericodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VericodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VericodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
