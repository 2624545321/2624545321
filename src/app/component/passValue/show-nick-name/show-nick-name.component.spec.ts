import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNickNameComponent } from './show-nick-name.component';

describe('ShowNickNameComponent', () => {
  let component: ShowNickNameComponent;
  let fixture: ComponentFixture<ShowNickNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNickNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowNickNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
