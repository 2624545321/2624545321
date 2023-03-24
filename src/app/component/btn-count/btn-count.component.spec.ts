import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCountComponent } from './btn-count.component';

describe('BtnCountComponent', () => {
  let component: BtnCountComponent;
  let fixture: ComponentFixture<BtnCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
